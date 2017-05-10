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
  View,
  ScrollView,
  Button
} from 'react-native';

import {Actions} from "react-native-router-flux";

export default class Home extends Component {

	_goToSearch(){
    	Actions.searchmovies({
      	message: "Search Movies"
    });
  }
  _goToSearchCriteria(){
      Actions.searchmoviescriteria({
        message: "Search Movies By Criteria"
      });
    }
  _goToDetail(){
    Actions.detailmovie({
      id: "3"
    });
  }
  render() {
    return (
      	<ScrollView style={styles.container}>
			<Button
          		onPress={this._goToSearch.bind(this)}
          		title="Go to Search Page"  />
      <Button
        onPress={this._goToDetail.bind(this)}
        title="Go To Detail (TEST)"
        />
      <Button
            onPress={this._goToSearchCriteria.bind(this)}
            title="Go to Search By Criteria Page"  />
		</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    flex:1,
    marginTop: 65
  }
});

AppRegistry.registerComponent('ProjetReactVideotheque', () => ProjetReactVideotheque);
