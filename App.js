import React, { Component } from 'react';

import Player from './src/Player'
import PlayList from './src/PlayList'


import { Router, Scene } from 'react-native-router-flux'

export default class App extends Component {

  render() {
    
    return (
      <Router>
        <Scene key='root'>
          <Scene key='playList' component={PlayList} title='PlayList' initial />
          <Scene key='player' component={Player} title='Player' back />
        </Scene>
      </Router>
    );
  }
}


updateData = (value) => {
  this.setState({ name: value })
}

