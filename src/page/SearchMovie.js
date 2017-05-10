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
  Image,
  TextInput,
  Alert
} from 'react-native';

export default class SearchMovie extends Component {

	constructor(){
	    super();
	    this.state = {
	      movies: []
	    };
  	}

	async getMovies() {
	    let response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58f8fe741b03b0ae4c9a2ed080e94041');

	    let responseJson = await response.json();
	    this.setState({
	      movies: responseJson.results
	    });
	    return responseJson;
  	}

  	async searchMovie(sentTitle) {
  		let response = await fetch('https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=58f8fe741b03b0ae4c9a2ed080e94041&language=fr-FR&query='+sentTitle);

  		let responseJson = await response.json();
  		this.setState({
  			movies: responseJson.results
  		});

  		return responseJson;
  	}

  	_onTextChange(new_text) {
  		if (new_text != '')
  		{	
	    	this.searchMovie(new_text);
  		}
  		else
  		{
  			this.getMovies();
  		}
  	}	
 
  	componentDidMount() {
    	this.getMovies();
  	}

  	render() {
	    return (
	    	
	      	<ScrollView style={styles.container}>
	      	<TextInput
		        style={styles.input}
		        onChangeText={ (new_text) => this._onTextChange(new_text) }
		        value={this.state.text} />
	        {this.state.movies.map((movie, key) => {
	           return (
	             <View key={key}>
	              <Image style={ {width: 150, height: 100} } source={ {uri: basePath + movie.poster_path } } />
	              <Text >{movie.original_title}</Text>
	             </View>
	           );
	        })}
	      </ScrollView>
	    );
  	}
}

const styles = StyleSheet.create({
  container: {
  	marginTop: 50,
    flex: 1,
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

const basePath = "https://image.tmdb.org/t/p/w500"

AppRegistry.registerComponent('ProjetReactVideotheque', () => ProjetReactVideotheque);
