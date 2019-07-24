import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import Search from './Search'
import Nav from './Nav'
import Home from './Home'
import Cats from './Cats'
import Dogs from './Dogs'
import Computers from './Computers'
import NotFound from './NotFound'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Search />
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
)

export default App;
