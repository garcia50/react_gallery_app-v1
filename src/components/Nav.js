import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  defaultLink = e => {
    this.props.onClick(e.target.innerText);
  }

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/space" onClick={this.defaultLink}>Space</NavLink></li>
          <li><NavLink to="/food" onClick={this.defaultLink}>Food</NavLink></li>
          <li><NavLink to="/animals" onClick={this.defaultLink}>Animals</NavLink></li>
        </ul>
      </nav>
    )
  }
}