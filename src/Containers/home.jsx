import React, { Component } from 'react'
import Navbar from '../Components/navbar';
import Aplikasi from'../Components/aplikasi';
import Button from'../Components/button';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br></br>
        <Button />
        <br></br>
        <Aplikasi />
      </div>
    )
  }
}
