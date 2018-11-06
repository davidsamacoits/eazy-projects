// ./modals/AddMoneyModal/index.js

import React, { Component } from 'react';
import { 
  Text,
  View,
} from 'react-native';
import styles from './styles';

export default class AddMoneyModal extends Component {
  render() {
    return(
      <View style={styles.modalContainer}>
        <Text style={styles.titleModal}>How much do you want to add?</Text>        
      </View>
    )
  }
}