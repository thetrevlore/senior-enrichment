import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <Link to="/home"> Home </Link>
        <Link to="/campuses"> Campuses </Link>
        <Link to="/students"> Students </Link>
      </div>
    )
  }
}