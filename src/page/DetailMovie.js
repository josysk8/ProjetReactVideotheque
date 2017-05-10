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
  Alert
} from 'react-native';

export default class DetailMovie extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      details: []
    };
  }

  async getDetails() {
    try
    {
      let response = await fetch('https://api.themoviedb.org/3/movie/'+this.props.id+'?api_key=58f8fe741b03b0ae4c9a2ed080e94041');
      let responseJson = await response.json();
      Alert.alert(responseJson.results);
      this.setState({
        details: responseJson.results
      });
      return responseJson;
    } catch(error)
    {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getDetails();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.details.map((detail, key) => {
          return (
            <View key={key}>
              <Text>
                {detail.title}
              </Text>
              <Text>
                {detail.overview}
              </Text>
              <Text>
                Note : {detail.vote_average} / 10
              </Text>
              
            </View>
          );
        })}
      </View>
    );
  }
}
const basePath = "https://image.tmdb.org/t/p/w500"

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
});

AppRegistry.registerComponent('ProjetReactVideotheque', () => ProjetReactVideotheque);
