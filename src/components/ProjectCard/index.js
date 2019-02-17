// ./components/ProjectCard/index.js

import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInputMask } from 'react-native-masked-text'
import isEqual from 'lodash/isEqual';

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

import {
  COLOR_PRIMARY,
  TEXT_SHADOW_WIDTH,
  ACTIVE_OPACITY,
} from '../../styles/common';

import { 
  CARD_INPUT_HEIGHT,
  CARD_INPUT_DURATION,
  CARD_INPUT_OPACITY,
  CARD_INPUT_DELAY,
  CARD_WIDTH_GUTTER,
  CARD_AMOUNT_OPTIONS,
  CARD_PROGRESS_DELAY,
  CARD_PROGRESS_DURATION,
} from './constants';

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    // Calculate initial progress
    const progressWidth = this.calculateProgressWidth(this.props.goal, this.props.amountSaved);
    this.state = {
      animatedProgress: new Animated.Value(progressWidth),
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log('>>>>>>>> nextProps.amountSaved', nextProps.amountSaved);
    // this.animateProgressBar(nextProps.amountSaved);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      !isEqual(this.props.amountSaved, nextProps.amountSaved) ||
      !isEqual(this.props.category, nextProps.category) ||
      !isEqual(this.props.goal, nextProps.goal)
    ) {
      this.animateProgressBar(nextProps.goal, nextProps.amountSaved);
      return true;
    }
    return false;
  }

  calculateProgressWidth(goal, amountSaved) {
    const { width } = Dimensions.get('window');
    const fullWidth = width - CARD_WIDTH_GUTTER;
    const realPourcentage = (+amountSaved / +goal);
    let pourcentage = realPourcentage;
    if (pourcentage > 1) pourcentage = 1;
    return pourcentage * fullWidth;
  }

  animateProgressBar(goal, amount) {
    const progressWidth = this.calculateProgressWidth(goal, amount);
    Animated.timing(
      this.state.animatedProgress,
      { toValue: progressWidth, duration: CARD_PROGRESS_DURATION, delay: CARD_PROGRESS_DELAY }
    ).start();
  }

  render() {
    const {
      imageSource,
      projectName,
      amountSaved,
      goal,
      category,
      forceUpdate,
    } = this.props;

    return ( 
      <View style={styles.projectCardContainer}>
        <View style={styles.categoryContainer}>
          <Icon
            name={category.icon}
            size={18}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>{category.label}</Text>
        </View>
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
            <View style={styles.amountGoalContainer}>
              <Icon
                name='ios-return-right'
                size={25}
                style={styles.iconGoal}
              />
              <TextInputMask
                type={'money'}
                style={styles.amountGoal}
                value={goal}
                ref={ref => (this.amountGoal = ref)}
                options={CARD_AMOUNT_OPTIONS}
                editable={false}
              />
            </View>
            <View style={styles.progressContainer}>
              <Animated.View style={[styles.progressBar, { width: this.state.animatedProgress, backgroundColor: category.mainColor }]}></Animated.View>
            </View>
          </ImageBackground>
        </ImageBackground>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddMoneyModal', { forceUpdate })}
            color={COLOR_PRIMARY}
            style={styles.openAddMoneyButton}
            activeOpacity={ACTIVE_OPACITY}
          >
            <Text style={styles.openAddMoneyText}>Add money to this project</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(ProjectCard);