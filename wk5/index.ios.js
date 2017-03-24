import React from 'react';
import {AppRegistry,View} from 'react-native';
import Page from './src/js/uno';
//import Page from './src/js/duo';
//import Page from './src/js/trois';
const App =()=>{
    return (
      <View>
        <Page />
      </View>
    );
};

AppRegistry.registerComponent('wk5', () => App);