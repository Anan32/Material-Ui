import React, { Component } from 'react'
import Navbar from '../Components/navbar';
import Toko from '../Components/toko';


export default class Restaurant extends Component {
  render() {
    return (
      <div>
          <Navbar />
        <Toko />   
      </div>
    )
  }
}
