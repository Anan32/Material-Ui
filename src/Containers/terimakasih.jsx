import React, { Component } from 'react'
import Navbar from '../Components/navbar';

export default class Terimakasih extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br></br>
        <div align="center">
        <h1>Terimakasih</h1>
        <hr></hr>
        <h3>Telah memesan dari aplikasi Go-Food</h3>
        </div>
      </div>
    )
  }
}
