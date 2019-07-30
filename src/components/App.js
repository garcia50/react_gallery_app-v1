import React, { Component } from 'react';
import apiKey from '../config.js';
import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import SearchForm from './SearchForm'
import Nav from './Nav'
import Gallery from './Gallery'
import NotFound from './NotFound'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true
    };
    // this.performSearch();
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'scenic') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        imgs: response.data.photos.photo,
        loading: false,
      });
     })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (  
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
              <Route path="/:query" render={ ({match}) => <Gallery title={match.params.query.toUpperCase()} data={this.state.imgs} /> } /> 
              <Route component={NotFound} />
            </Switch>  
          }
        </div>
      </BrowserRouter>
    );
  }
}

