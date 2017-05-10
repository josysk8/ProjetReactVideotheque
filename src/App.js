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
import SearchMovie from './page/SearchMovie';
import SearchMovieCriteria from './page/SearchMovieCriteria';
import DetailMovie from './page/DetailMovie'

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
             key="searchmovies"
             component={SearchMovie}
             title="Search Movies"
            />
          <Scene
             key="searchmoviescriteria"
             component={SearchMovieCriteria}
             title="Search Movies By Criteria"
            />
          <Scene
            key="detailmovie"
             component={DetailMovie}
             title="Detail"
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
