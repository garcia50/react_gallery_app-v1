import React, { Component } from 'react';
import { Provider } from './Context'
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
    // this.performSearch();
    this.state = {
      imgs: []
    };
  }

  // componentDidMount(query = 'water') {
  //   axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  //   .then(response => {
  //     console.log('checking response in App', response);
  //     this.setState({
  //       imgs: response.data
  //     });
  //   })
  //   .catch(error => {
  //     console.log('Error fetching and parsing data', error);
  //   });
  // }

  performSearch = (query) => {
    // this.setState({imgs: []});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log('checking response in App', response.data.photos.photo);
      this.setState({
        imgs: response.data.photos.photo
        // this.state.imgs.push(response.data.photos.photo);
        // return this.state.imgs.push(response.data.photos.photo);

      });
      return this.state.imgs
        console.log('immmmmmaaaaagegeesss', this.state.imgs);
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (  
      <Provider value={this.performSearch} >
        <BrowserRouter>
          <div className="container">
            <SearchForm onSearch={this.performSearch} />
            <Nav />

            <Switch>
              <Route exact path="/" component={Home} />    
              <Route path="/cats" component={Cats} />
              <Route path="/dogs" component={Dogs} />
              <Route path="/computers" component={Computers} />
              <Route component={NotFound} />
            </Switch>  
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

  //render={ () => <Home onStart={this.performSearch('sky')} data={this.state.imgs} /> } />