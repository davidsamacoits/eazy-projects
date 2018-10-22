// ./pages/Home.js

import React, { Component } from 'react';
import { 
  Text,
  View,
  Image,
  StatusBar,
  AsyncStorage,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import ProjectCard from '../components/ProjectCard';
import CarouselBackground from '../components/CarouselBackground';

import styles from '../styles/app';
import {
  ACTIVE_OPACITY,
  CAROUSSEL_INACTIVE_SLIDE_OPACITY,
  CAROUSSEL_INACTIVE_SLIDE_SCALE
} from '../styles/common';

import { STORAGE_KEYS } from '../constants';
import { CARD_WIDTH_GUTTER } from '../components/ProjectCard/constants'; 

import { imagesAssets } from '../helpers/images';
import { retrieveProjects, storeProjects } from '../helpers/storage';
import { getCategory } from '../helpers/categories';

const { width } = Dimensions.get('window');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {},
      currentProject: 0,
      isLoading: true,
    };
  }

  // Lifecycle methods
  componentDidMount() {
    retrieveProjects(true).then(projects => {
      this.setState(previousState => {
        return { projects, isLoading: false };
      });
    });
  }

  // Callbacks & other methods
  _addMoneyCallback(amount=1000) {
    const projects = this.state.projects;
    const currentAmount = projects[this.state.currentProject].amountSaved;
    const newAmountSaved = +currentAmount + +amount
    projects[this.state.currentProject].amountSaved = newAmountSaved;
    storeProjects(projects).then(() => {
      this.setState(previousState => {
        return { projects };
      });
    });
  }
  _onBeforeSnapToItem(slideIndex) {
    this.setState(previousState => {
      return { currentProject: slideIndex };
    });
  }

  // Renders
  _renderAddProjectButton() {
    return(
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Project')}
          style={styles.addProjectButton}
          activeOpacity={ACTIVE_OPACITY}
        >
          <Text style={styles.addProjectText}>Add new project</Text>
          <Icon
            name='ios-add-circle'
            size={30}
            style={styles.addProjectIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
  _renderItem({item, index}) {
    const itemCategory = getCategory(item.categoryId);
    return (
      <ProjectCard
        projectName={item.projectName}
        amountSaved={item.amountSaved}
        goal={item.goal}
        category={itemCategory}
        imageSource={imagesAssets[itemCategory.image]}
        submitCallback={amount => this._addMoneyCallback(amount)}
      />
    );
  }
  _renderPagination() {
    const { projects, currentProject } = this.state;
    return (
        <Pagination
          dotsLength={projects.length}
          activeDotIndex={currentProject}
          dotStyle={styles.paginationDot}
          containerStyle={styles.paginationDotContainer}
        />
    );
  }

  render() {
    const { projects, currentProject, isLoading } = this.state;
    const project = projects[currentProject];
    if (project && !isLoading) {
      const category = getCategory(project.categoryId);       
      return (
        <View style={styles.container}>
          <CarouselBackground currentBackground={category.image} />
          <StatusBar
            barStyle="light-content"
          />
          <KeyboardAvoidingView style={styles.containerOverlay} behavior="position">
            {this._renderAddProjectButton()}
            <Carousel
              ref={(c) => { this._carousel = c }}
              data={this.state.projects}
              renderItem={this._renderItem.bind(this)}
              sliderWidth={width}
              itemWidth={width - CARD_WIDTH_GUTTER}
              containerCustomStyle={{ flexGrow: 0, overflow:'visible'}}
              onBeforeSnapToItem={this._onBeforeSnapToItem.bind(this)}
              inactiveSlideOpacity={CAROUSSEL_INACTIVE_SLIDE_OPACITY}
              inactiveSlideScale={CAROUSSEL_INACTIVE_SLIDE_SCALE}
            />
            {this._renderPagination()}
          </KeyboardAvoidingView>
        </View>
      );
    } else { return null; }
  }
}