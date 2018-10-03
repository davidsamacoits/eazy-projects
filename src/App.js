// ./App.js

import React, { Component } from 'react';
import { 
  Text,
  View,
  ImageBackground,
  StatusBar,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';

import ProjectCard from './components/ProjectCard';

import styles from './styles/app';
import { BLUR_RADIUS_OVERLAY } from './styles/common';

import { STORAGE_KEYS } from './constants';

import { imagesAssets } from './helpers/images';
import { retrieveProjects, storeProjects } from './helpers/storage';

import { selectedProject } from './assets/projects';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    retrieveProjects().then(projects => {
      this.setState(previousState => {
        return { projects, isLoading: false };
      });
    });
  }

  addMoneyCallback (amount) {
    const projects = this.state.projects;
    const currentAmount = projects[selectedProject].amountSaved;
    projects[selectedProject].amountSaved = +currentAmount + +amount;
    storeProjects(projects).then(() => {
      this.setState(previousState => {
        return { projects };
      });
    });
  }

  render() {
    const currentProject = this.state.projects[selectedProject];
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
              <ProjectCard
                projectName={currentProject.projectName}
                amountSaved={currentProject.amountSaved}
                imageSource={imagesAssets[currentProject.imageSource]}
                submitCallback={amount => this.addMoneyCallback(amount)}
              />
            </KeyboardAvoidingView>
        </ImageBackground>
      );
    } else { return null; }
  }
}