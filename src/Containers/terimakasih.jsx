import React, { Component } from 'react'
import Navbar from '../Components/navbar';

export default class Terimakasih extends Component {
  
  componentDidMount(){
    var x = sessionStorage.total;
    document.getElementById('totalHarga').innerHTML = x;
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <br></br>
        <div align="center">
        <h1>Terimakasih</h1>
        <h3>Total pembayaran anda:</h3>
        <h4 id="totalHarga"></h4>
        <hr></hr>
        <h4>Telah memesan dari aplikasi Go-Food</h4>
        </div>
      </div>
    )
  }
}
