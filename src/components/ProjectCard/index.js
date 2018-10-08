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
  Dimensions,
} from 'react-native';
import styles from './styles';

import { COLOR_PRIMARY, TEXT_SHADOW_WIDTH } from '../../styles/common';

import { 
  CARD_INPUT_HEIGHT,
  CARD_INPUT_DURATION,
  CARD_INPUT_OPACITY,
  CARD_INPUT_DELAY,
  CARD_WIDTH_GUTTER,
  CARD_AMOUNT_OPTIONS,
} from './constants';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    // Calculate progress
    const progressWidth = this.calculateProgressWidth(this.props.goal, this.props.amountSaved);
    this.state = {
      isEditing: false,
      amountToAdd: '0',
      animatedHeight: new Animated.Value(0),
      animatedOpacity: new Animated.Value(0),
      animatedProgress: new Animated.Value(progressWidth),
    };
  }

  calculateProgressWidth(goal, amountSaved) {
    const { width } = Dimensions.get('window');
    const fullWidth = width - CARD_WIDTH_GUTTER;
    const realPourcentage = (+amountSaved / +goal);
    let pourcentage = realPourcentage;
    if (pourcentage > 1) pourcentage = 1;
    return pourcentage * fullWidth;
  }

  animateProgressBar(amountToAdd) {
    const progressWidth = this.calculateProgressWidth(this.props.goal, (+this.props.amountSaved + +amountToAdd));
    Animated.timing(
      this.state.animatedProgress,
      { toValue: progressWidth, duration: CARD_INPUT_DURATION }
    ).start();
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
    // Animate input height and opacity
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
              this.animateProgressBar(this.state.amountToAdd);
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
          <TextInputMask
            type={'money'}
            style={styles.amountSaved}
            value={amountSaved}
            ref={ref => (this.amountSaved = ref)}
            options={CARD_AMOUNT_OPTIONS}
            editable={false}
          />
        </ImageBackground>
      </ImageBackground>
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, { width: this.state.animatedProgress }]}></Animated.View>
      </View>
      <Animated.View style={[styles.amountInputContainer, { height: this.state.animatedHeight, opacity: this.state.animatedOpacity }]}>
        <TextInputMask
            type={'money'}
            style={styles.amountInput}
            value={this.state.amountToAdd}
            ref={ref => (this.amountInput = ref)}
            options={CARD_AMOUNT_OPTIONS}
            onChangeText={() => {
                this.setState({
                  amountToAdd: this.amountInput.getRawValue(),
                })
              }
            }
        />
      </Animated.View>
      {this.state.isEditing && this.renderEditingButton(submitCallback)}
      {!this.state.isEditing && this.renderAddMoneyButton()}
    </View>
    );
  }
}