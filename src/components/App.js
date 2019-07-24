import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';


import Search from './Search'
import Nav from './Nav'
import Home from './Home'
import Cats from './Cats'
import Dogs from './Dogs'
import Computers from './Computers'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Search />
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/cats" component={Cats} />
      <Route path="/dogs" component={Dogs} />
      <Route path="/computers" component={Computers} />
    </div>
  </BrowserRouter>
)

export default App;
