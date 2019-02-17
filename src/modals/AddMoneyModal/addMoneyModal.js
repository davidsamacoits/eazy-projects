// ./modals/AddMoneyModal/addMoneyModal.js

import React, { Component } from 'react';
import { 
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';

import { ACTIVE_OPACITY } from '../../styles/common';
import { AMOUNT_OPTIONS } from './constants';

export default class AddMoneyModal extends Component {
  // Callbacks & other methods
  _addMoneyCallback() {
    const amount = this.amountInput.getRawValue();
    const { currentProject } = this.props;
    this.props.addMoneyToProject(currentProject, amount);
    // Force render
    this.props.navigation.state.params.forceUpdate();
    this.props.navigation.goBack();
  }

  render() {
    return(
      <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          style={styles.dismissKeyboardContainer}
        >
        <View style={styles.modalContainer}>
            <KeyboardAvoidingView style={styles.container} behavior='position' keyboardVerticalOffset={75}>
              <Text style={styles.titleModal}>How much do you want to add?</Text>
              <TextInputMask
                type={'money'}
                style={styles.amountInput}
                value={0}
                ref={ref => (this.amountInput = ref)}
                options={AMOUNT_OPTIONS}
              />
              <TouchableOpacity
                onPress={() => this._addMoneyCallback()}
                style={styles.addMoneyButton}
                activeOpacity={ACTIVE_OPACITY}
              >
                <Text style={styles.addMoneyText}>Add</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}