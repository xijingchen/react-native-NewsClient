/**
* Created by Jing 2017-05-27
* Main page for News client
*/

import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet
} from 'react-native';

import GiftedListView from 'react-native-gifted-listview';


var HTMLParser = require('fast-html-parser');
var SinaParser = require('./SinaHtmlParser');


class Main extends Component {
  constructor(props){
    super(props);
  }


  _onFetch(page = 1, callback, options){
    fetch('http://news.sina.com.cn/china')
        .then(response => response.text())
        .then(function(data){
          var rows = [];
          var root = HTMLParser.parse(data);
          var newsBodies = root.querySelector('.blk12').removeWhitespace();
          newsBodies.childNodes.forEach(function(body){
            rows = rows.concat(SinaParser.parseHtmlNewBlock(body));
          });
          callback(rows);
        });
  }

  _renderRow(row){
      return (
        <View style={styles.item}>
          <View style={styles.heading}>
            <Text style={styles.headingText} numberOfLines={2}>{row.title}</Text>
            <View style={{flexDirection: 'row',
                          alignItems: 'center'}}>
              <Text style={{color: '#888'}}>{row.ref}</Text>
            </View>
          </View>
        </View>
      );
  }

  _onEndReached() {
        this.refs.listView._onPaginate();
    }

  render(){
      return (
      <View style={{flex: 1}}>
        <GiftedListView
          rowView={this._renderRow}
          onFetch={this._onFetch}
          refreshable={true}

          ref='listView'
          onEndReached={this._onEndReached.bind(this)}
          onEndReachedThreshold={25}
           />
      </View>
    );
  }

}

const styles = StyleSheet.create(
  {
    item: {
      borderBottomWidth: 1,
      borderColor: '#F0F0F0',
      flexDirection: 'row',
      paddingTop: 15,
      paddingBottom:15,
      paddingLeft: 10,
      paddingRight: 10
    },
    heading: {
      flex: 3
    },
    headingText: {
      fontSize: 25,
      color: '#363636',
      lineHeight: 30
    }
  }
);

export default Main;
