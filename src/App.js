// ./App.js

import React, { Component } from 'react';
import { Text, View, ImageBackground, StatusBar, AsyncStorage } from 'react-native';

import styles from './styles/app';
import { BLUR_RADIUS_OVERLAY } from './styles/common';

import { STORAGE_KEYS } from './constants';

import { imagesAssets } from './helpers/images';

import ProjectCard from './components/ProjectCard';

// To remove
const currentProjectId = 1;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {projects: {}};
  }

  componentDidMount() {
    this._storeData(); 
    this._retrieveData();
    console.log('>>>>>>>> didMount');
  }

  addMoneyCallback (amount) {
    console.log('>>>>>>>> addMoneyCallback - amount', amount);
    const projects = this.state.projects;
    const currentAmount = projects[currentProjectId].amountSaved;
    const newAmount = +currentAmount + +amount;
    projects[currentProjectId].amountSaved = newAmount;
    this.setState(previousState => {
      return { projects };
    });
    this._storeProjects(projects);
    console.log('>>>>>>>> newAmount', newAmount);
  }


  render() {
    const currentProject = this.state.projects[currentProjectId];
    if (currentProject) {
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
          <View style={styles.containerOverlay}>
            <ProjectCard
              projectName={currentProject.projectName}
              amountSaved={currentProject.amountSaved}
              imageSource={imagesAssets[currentProject.imageSource]}
              submitCallback={(amount) => this.addMoneyCallback(amount)}
            />
          </View>
        </ImageBackground>
      );
    } else { return null; }
  }

  _storeData = async () => {
    try {
      const projects = {
        1: {
          projectName: "Europe MMXIX",
          amountSaved: "250.00",
          imageSource: "602493b9e8f24516aab8c2455fddc44b",
        },
      };
      await AsyncStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (error) {
      // Error saving data
    }
  }

  _storeProjects = async (projects) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (error) {
      // Error saving data
    }
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (value !== null) {
        // We have data!!
        const projects = JSON.parse(value);
        this.setState(previousState => {
          return { projects };
        });
        console.log(projects);
      }
     } catch (error) {
       // Error retrieving data
       console.log(error);
     }
  }

}