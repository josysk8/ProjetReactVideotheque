import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ListView
} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

import Home from './page/Home';
import SearchMovie from './page/SearchMovie'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="home"
            title="Home"
            component={Home}
            initial={true} />
           <Scene
             key="movies"
             component={SearchMovie}
             title="Search Movies"
            />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center'
  }
});
