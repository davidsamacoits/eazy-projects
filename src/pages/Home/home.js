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
import isEmpty from 'lodash/isEmpty';

import ProjectCard from '../../components/ProjectCard';
import CarouselBackground from '../../components/CarouselBackground';

import styles from '../../styles/app';
import {
  ACTIVE_OPACITY,
  CAROUSSEL_INACTIVE_SLIDE_OPACITY,
  CAROUSSEL_INACTIVE_SLIDE_SCALE
} from '../../styles/common';

import { STORAGE_KEYS } from '../../constants';
import { CARD_WIDTH_GUTTER } from '../../components/ProjectCard/constants'; 

import { imagesAssets } from '../../helpers/images';
import { retrieveProjects, storeProjects } from '../../helpers/storage';
import { getCategory } from '../../helpers/categories';

const { width } = Dimensions.get('window');

export default class Home extends Component {
  // Callbacks & other methods
  _onBeforeSnapToItem(slideIndex) {
    this.props.changeCurrentProject(slideIndex);
  }

  // Renders
  _renderAddProjectButton() {
    return(
      <View style={styles.addProjectButtonContainer}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ProjectModal')}
          style={styles.addProjectButton}
          activeOpacity={ACTIVE_OPACITY}
        >
          <Text style={styles.addProjectText}>Add new project</Text>
          <Icon
            name='ios-add-circle'
            size={24}
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
        forceUpdate = {() => this.forceUpdate()}
      />
    );
  }

  _renderPagination() {
    const { projects, currentProject } = this.props;
    return (
        <Pagination
          dotsLength={projects.length}
          activeDotIndex={currentProject}
          dotStyle={styles.paginationDot}
          containerStyle={styles.paginationDotContainer}
        />
    );
  }

  _renderCarousel(projects) {
    if (!isEmpty(projects)) {
      return (
        <Carousel
          ref={(c) => { this._carousel = c }}
          data={projects}
          renderItem={this._renderItem.bind(this)}
          sliderWidth={width}
          itemWidth={width - CARD_WIDTH_GUTTER}
          containerCustomStyle={{ flexGrow: 0, overflow: 'visible'}}
          onBeforeSnapToItem={this._onBeforeSnapToItem.bind(this)}
          inactiveSlideOpacity={CAROUSSEL_INACTIVE_SLIDE_OPACITY}
          inactiveSlideScale={CAROUSSEL_INACTIVE_SLIDE_SCALE}
        />
      )
    } else {
      return <Text>No projects</Text>
    }
  }

  render() {
    const { isLoading, projects, currentProject } = this.props;

    if (isLoading) {
      return <Text>LOADING...</Text>;
    } else {
      if (!isEmpty(projects)) {
        const project = projects[currentProject];
        const category = getCategory(project.categoryId);       
        return (
          <View style={styles.container}>
            <CarouselBackground currentBackground={category.image} />
            <StatusBar
              barStyle="light-content"
            />
            <View style={styles.containerOverlay} behavior="position">
              {this._renderAddProjectButton()}
              {this._renderCarousel(projects)}
              {this._renderPagination()}
            </View>
          </View>
        );
      } else {
        return <Text>No projects</Text>;
      }
    }
  }
}