// ./components/ProjectCard/index.js

import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import styles from './styles';

import { COLOR_PRIMARY, TEXT_SHADOW_WIDTH } from '../../styles/common';

import { CURRENCIES } from '../../constants';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  showEditing() {
    this.setState(previousState => {
      return { isEditing: true };
    });
  }

  hideEditing() {
    this.setState(previousState => {
      return { isEditing: false };
    });
  }

  renderAddMoneyButton() {
    return(
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => this.showEditing()}
          color={COLOR_PRIMARY}
          style={styles.openAddMoneyButton}
        >
          <Text style={styles.openAddMoneyText}>Add money to this project</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderEditingButton(submitCallback) {
    return(
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => this.hideEditing()}
          color={COLOR_PRIMARY}
          style={styles.cancelButton}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => submitCallback(100)}
          color={COLOR_PRIMARY}
          style={styles.addMoneyButton}
        >
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const {
      imageSource,
      projectName,
      amountSaved,
      submitCallback,
    } = this.props;
  
    // Formating for CAD currency
    const numberFormat = new Intl.NumberFormat(CURRENCIES.CAD.locale, {
      style: 'currency',
      currency: CURRENCIES.CAD.code,
      maximumFractionDigits: 2,
    });
    const amount = numberFormat.format(amountSaved);
  
    return ( 
    <View style={styles.projectCardContainer}>
      <ImageBackground
        source={imageSource}
        style={styles.imageCardContainer}
        resizeMode="cover"
      >
        <ImageBackground
          source={require('../../assets/images/gradient.png')}
          style={styles.imageCardOverlay}
          resizeMode="stretch"
        >
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.projectName}
          >
            {projectName}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.amountSaved}
          >
            {amount}
          </Text>
        </ImageBackground>
      </ImageBackground>
      {this.state.isEditing && this.renderEditingButton(submitCallback)}
      {!this.state.isEditing && this.renderAddMoneyButton()}
    </View>
    );
  }
}