// ./components/ProjectCard/index.js

import React, { Component } from 'react';

import { TextInputMask } from 'react-native-masked-text'

import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  Animated,
  Keyboard,
} from 'react-native';
import styles from './styles';

import { COLOR_PRIMARY, TEXT_SHADOW_WIDTH } from '../../styles/common';

import { CURRENCIES } from '../../constants';
import { CARD_INPUT_HEIGHT, CARD_INPUT_DURATION, CARD_INPUT_OPACITY, CARD_INPUT_DELAY } from './constants';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      amountToAdd: '0',
      animatedHeight : new Animated.Value(0),
      animatedOpacity : new Animated.Value(0),
    };
  }

  animateInput() {
    const values = {
      height: {
        initial: this.state.isEditing ? CARD_INPUT_HEIGHT : 0,
        toValue: this.state.isEditing ? 0 : CARD_INPUT_HEIGHT,
        delay: this.state.isEditing ? CARD_INPUT_DELAY/2 : 0,
      },
      opacity: {
        initial: this.state.isEditing ? CARD_INPUT_OPACITY : 0,
        toValue: this.state.isEditing ? 0 : CARD_INPUT_OPACITY,
        delay: this.state.isEditing ? 0 : CARD_INPUT_DELAY,
      },
    };
    this.state.animatedHeight.setValue(values.height.initial);
    this.state.animatedOpacity.setValue(values.opacity.initial);
    Animated.timing(
        this.state.animatedHeight,
        { toValue: values.height.toValue, duration: CARD_INPUT_DURATION, delay: values.height.delay }
    ).start();
    Animated.timing(
        this.state.animatedOpacity,
        { toValue: values.opacity.toValue, duration: CARD_INPUT_DURATION, delay: values.opacity.delay }
    ).start();
  }

  showEditing() {
    this.setState(previousState => {
      return { isEditing: true };
    });
    this.animateInput();
  }

  hideEditing() {
    this.setState(previousState => {
      return { isEditing: false, amountToAdd: '0' };
    });
    this.animateInput();
    Keyboard.dismiss();
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
      <View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => this.hideEditing()}
            color={COLOR_PRIMARY}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              submitCallback(this.state.amountToAdd);
              this.hideEditing();
            }}
            color={COLOR_PRIMARY}
            style={styles.addMoneyButton}
          >
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
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
      <Animated.View style={[styles.amountInputContainer, { height: this.state.animatedHeight, opacity: this.state.animatedOpacity }]}>
        <TextInputMask
            type={'money'}
            style={styles.amountInput}
            value={this.state.amountToAdd}
            onChangeText={(text) => {
                this.setState({
                  amountToAdd: text.match(/(([0-9]+\,)+)?[0-9]+\.[0-9]+/g),
                })
              }
            }
            options={{
              separator:'.',
              unit:'$',
              delimiter: ',',
            }}
        />
      </Animated.View>
      {this.state.isEditing && this.renderEditingButton(submitCallback)}
      {!this.state.isEditing && this.renderAddMoneyButton()}
    </View>
    );
  }
}