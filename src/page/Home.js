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

export default class Home extends Component {

	_goToSearch(){
    	Actions.searchmovies({
      	message: "Search Movies"
    });
  }
  render() {
    return (
      	<ScrollView style={styles.container}>
			<Button
          		onPress={this._goToSearch.bind(this)}
          		title="Go to Search Page"  />
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
