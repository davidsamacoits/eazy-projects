// ./App.js

import React, { Component } from 'react';
import { 
  Text,
  View,
  ImageBackground,
  StatusBar,
  AsyncStorage,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import ProjectCard from './components/ProjectCard';

import styles from './styles/app';
import { BLUR_RADIUS_OVERLAY, ACTIVE_OPACITY } from './styles/common';

import { STORAGE_KEYS } from './constants';
import { CARD_WIDTH_GUTTER } from './components/ProjectCard/constants'; 

import { imagesAssets } from './helpers/images';
import { retrieveProjects, storeProjects } from './helpers/storage';

import { selectedProject } from './assets/projects';

const { width } = Dimensions.get('window');

export default class App extends Component {
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
          onPress={() => this._addMoneyCallback(1000)}
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
    return (
      <ProjectCard
        projectName={item.projectName}
        amountSaved={item.amountSaved}
        goal={item.goal}
        imageSource={imagesAssets[item.imageSource]}
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
        />
    );
  }

  render() {
    const currentProject = this.state.projects[this.state.currentProject];
    const isLoading = this.state.isLoading;
    if (currentProject && !isLoading) {
      return (
        <ImageBackground
          source={imagesAssets[currentProject.imageSource]}
          blurRadius={BLUR_RADIUS_OVERLAY}
          style={styles.container}
          resizeMode="cover"
        >
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
              />
              {this._renderPagination()}
            </KeyboardAvoidingView>
        </ImageBackground>
      );
    } else { return null; }
  }
}