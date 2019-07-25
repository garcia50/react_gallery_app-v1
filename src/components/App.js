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
      imgs: []
    };
  }

  componentDidMount() {
    
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b1230a3bf5635ef2bae314984a60022c&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        imgs: response.data.photos
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

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cats" component={Cats} />
            <Route path="/dogs" component={Dogs} />
            <Route path="/computers" component={Computers} />
            <Route component={NotFound} />
          </Switch>  
        </div>
      </BrowserRouter>
    );
  }

}

// export default App;
