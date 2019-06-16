import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Player from './src/Player'
import PlayList from './src/PlayList'


import { Router, Scene } from 'react-native-router-flux'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='playList' component={PlayList} title='PlayList' initial/>
          <Scene key='player' component={Player} title='Player' />
        </Scene>
      </Router>
    );
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 50
  }
});
