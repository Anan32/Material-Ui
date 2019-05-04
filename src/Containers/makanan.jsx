import React, { Component } from 'react'
import Navbar from '../Components/navbar';
import Menu from '../Components/menu';
import List from '../Components/list'

export default class Makanan extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <br></br>
          <Menu />
          <br></br>
          <hr color="green"></hr>
          <List />
      </div>
    )
  }
}
