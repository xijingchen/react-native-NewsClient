/**
* Created by Jing 2017-05-27
* module for parsing Sina news web html
*/
import {
  Alert,
} from 'react-native';

var self = module.exports = {
/**
* get href attribute from attribute listView
* @param {string} values
**/
getHrefAttribute: function(values) {
   var attributes = values.split(' ');
   var i;
   for(i = 0; i < attributes.length; i++){
      var pair = attributes[i].split('=');
      if(pair[0] == 'href'){
        return pair[1];
      }
   }
   return '';
},

/**
* @param {Object} body
**/
parseHtmlNewBlock: function(body){
  var rowArrays = [];
  var children = body.removeWhitespace().childNodes;
  children.forEach(function(child){
    var pair = {
      'title' : child.childNodes[0].rawText,
      'ref' : self.getHrefAttribute(child.rawAttrs)
    };
    rowArrays.push(pair);
  });

  return rowArrays;
}

}
