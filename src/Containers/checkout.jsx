import React, { Component } from 'react'
import Navbar from '../Components/navbar';
import List from '../Components/list';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br></br>
        <List />
      </div>
    )
  }
}
