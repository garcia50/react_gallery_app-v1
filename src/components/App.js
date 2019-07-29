import React, { Component } from 'react';
import apiKey from '../config.js';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import SearchForm from './SearchForm'
import Nav from './Nav'
import Home from './Home'
import Cats from './Cats'
import Dogs from './Dogs'
import Computers from './Computers'
import NotFound from './NotFound'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true
    };
    // this.performSearch('sky');
  }

  componentDidMount() {
    this.performSearch('sky');
  }

  performSearch = (query) => {
    // this.setState({imgs: []});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response);
      console.log('checking response in App', query, response.data.photos.photo);
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
          <Nav />
          {
            (this.state.loading)
            ? <h3>Loading...</h3>
            : 
            <Switch>
              <Route exact path="/" render={ () => <Home data={this.state.imgs} /> } />  
              <Route path="/cats" render={ () => <Cats onSearch={this.performSearch} data={this.state.imgs} /> } /> 
              <Route path="/dogs" component={Dogs} />
              <Route path="/computers" component={Computers} />
              <Route component={NotFound} />
            </Switch>  
          }
        </div>
      </BrowserRouter>
    );
  }
}

  //render={ () => <Home onStart={this.performSearch('sky')} data={this.state.imgs} /> } />
  // onStart={this.performSearch('sky')}