/**
* Created by Jing 2017-05-27
*/

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class NewsHeader extends Component {
  render() {
    return(
      <View style={styles.flex}>
        <Text style={styles.font}>
          <Text style={styles.font_header}>{this.props.header}</Text>
          <Text> 新闻</Text>
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create(
  {
    flex: {
      marginTop: 25,
      height: 44,
      borderBottomWidth: 1,
      borderBottomColor: '#EF2D36',
      alignItems: 'center'
    },
    font: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    font_header: {
      color: '#CD1D1C'
    }
  }
);

export default NewsHeader;
