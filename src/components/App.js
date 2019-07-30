
//Flickr's Api key
import apiKey from '../config.js';
//import the libraries needed for this project
import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
//import components into the App.js file
import SearchForm from './SearchForm'
import Nav from './Nav'
import Gallery from './Gallery'
import NotFound from './NotFound'


export default class App extends Component {
  //set state for app
  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true
    };
  }

  componentDidMount() {
    //run this function at initialization
    this.performSearch();
  }

  //obtain data using axios 
  performSearch = (query = 'scenic') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        //set data to imgs state
        imgs: response.data.photos.photo,
        loading: false,
      });
     })
    .catch(error => {
      //throw an error to console for developer debugging purposes
      console.log('Error fetching and parsing data', error);
    });
    return (this.imgs)
  }

  render() {
    return (  
      //Add routes and a h3 display while the data is being fetched
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav onClick={this.performSearch}/>
          {
            (this.state.loading)
            ? <h3>Loading...</h3>
            : 
            <Switch>
              <Route exact path="/" render={ () => <Gallery title="Gallery" data={this.state.imgs} /> } /> 
              <Route path="/space" render={ () => <Gallery title="Space" data={this.state.imgs} /> } /> 
              <Route path="/food" render={ () => <Gallery title="Food" data={this.state.imgs} /> } /> 
              <Route path="/animals" render={ () => <Gallery title="Animals" data={this.state.imgs} /> } /> 
              <Route path="/:query" render={ ({match}) => <Gallery search={this.performSearch(match.params.query)} title={match.params.query.toUpperCase()} data={this.state.imgs} /> } />  
              <Route component={NotFound} />
            </Switch>  
          }
        </div>
      </BrowserRouter>
    );
  }
}
