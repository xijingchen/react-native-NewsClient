/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NewsHeader from './project/components/Header';
import Main from './project/components/Main';

export default class NewsClient extends Component {
  render() {
    return (
      <View style={styles.container}>
          <NewsHeader header='新浪' />
          <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
  }

});

AppRegistry.registerComponent('NewsClient', () => NewsClient);
