import { AsyncStorage } from 'react-native';

import { STORAGE_KEYS } from '../constants';

import { projects } from '../assets/projects';

export const storeInitialData = async () => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  } catch (error) {
    // Error saving data
  }
}

export const storeProjects = async (projectsToSave) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projectsToSave));
  } catch (error) {
    // Error saving data
  }
}

export const retrieveProjects = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (value !== null) {
      // We have data!!
      const projects = JSON.parse(value);
      return projects;
      console.log(projects);
    }
   } catch (error) {
     // Error retrieving data
     console.log(error);
   }
}