import { AsyncStorage } from 'react-native';

import { STORAGE_KEYS } from '../constants';

import { projects } from '../assets/projects';

export const storeProjects = async (projectsToSave) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projectsToSave));
  } catch (error) {
    // Error saving data
    console.log(error);
  }
}

export const retrieveProjects = async (force = true) => {
  try {
    if (force) await AsyncStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    const value = await AsyncStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (value !== null) {
      const projectsFromStorage = JSON.parse(value);
      return projectsFromStorage;
    }
    // No value found, we get the one from assets
    await AsyncStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    return projects;
   } catch (error) {
     // Error retrieving data
     console.log(error);
   }
}