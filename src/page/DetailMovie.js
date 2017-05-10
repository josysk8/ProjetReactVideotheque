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
  Alert,
  Image
} from 'react-native';

export default class DetailMovie extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      details: {}
    };
  }

  async getDetails() {
    try
    {
      let response = await fetch('https://api.themoviedb.org/3/movie/'+this.props.id+'?api_key=58f8fe741b03b0ae4c9a2ed080e94041');
      let responseJson = await response.json();
      this.setState({
        details: responseJson
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
        <View>
          <Image source={{uri: basePath + this.state.details.poster_path}} style={{width:100,height:100}}/>
        </View>
        <View style={{flex: 1, flexDirection:'column', paddingLeft:15}}>
          <Text style={styles.title}>
            {this.state.details.title}
          </Text>
          <Text>
            {this.state.details.overview}
          </Text>
          <Text>
            Note : {this.state.details.vote_average} / 10
          </Text>
        </View>
      </View>
    );
  }
}
const basePath = "https://image.tmdb.org/t/p/w500";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
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
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('ProjetReactVideotheque', () => ProjetReactVideotheque);
