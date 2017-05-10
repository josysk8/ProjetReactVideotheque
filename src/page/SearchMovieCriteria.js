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
  Alert,
  Picker
} from 'react-native';

export default class SearchMovieCriteria extends Component {

  constructor(){
      super();
      this.state = {
        movies: [],
        genres: [],
        selectedGenre : 0
      };
    }

    async getGenre() {
      let response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=58f8fe741b03b0ae4c9a2ed080e94041&language=fr-FR');

      let responseJson = await response.json();
      this.setState({
        genres: responseJson.genres
      });
      return responseJson;
    }

    async getMovieByGenre(genreselected) {
      this.setState({
        selectedGenre: genreselected
      });
      let response = await fetch(' https://api.themoviedb.org/3/discover/movie?api_key=58f8fe741b03b0ae4c9a2ed080e94041&language=fr-FR&sort_by=release_date.desc&with_genres='+genreselected);

      let responseJson = await response.json();
      this.setState({
        movies: responseJson.results
      });
      return responseJson;
    }

    componentDidMount() {
      this.getGenre();
    }

    render() {
      return (
        
          <ScrollView style={styles.container}>
          <Picker selectedValue={this.state.selectedGenre} 
           onValueChange={(genreselect) => this.getMovieByGenre(genreselect)}
           > 
          {this.state.genres.map((genre, key) => {
             return (
            <Picker.Item label={genre.name} value={genre.id} /> 
            );
            })}
          </Picker>
          {this.state.movies.map((movie, key) => {
             return (
               <View key={key}>
                <Image style={ {width: 150, height: 100} } source={ {uri: basePath + movie.poster_path } } />
                <Text >{movie.original_title}</Text>
               </View>
             );
          })}
        </ScrollView >
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
