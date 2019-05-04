import React from 'react';
import './App.css';
import Home from './Containers/home';
import { Route } from 'react-router-dom';
import Restaurant from './Containers/restaurant';
import Makanan from './Containers/makanan';
import Pembayaran from './Containers/pembayaran';
import Checkout from './Containers/checkout';
import Terimakasih from './Containers/terimakasih';

function App() {
  return (
    <div>
      <switch>
      <Route path="/" exact component={Home} />
      <Route path="/restaurant" component={Restaurant} />
      <Route path="/menu" component={Makanan} />
      <Route path="/proses" component={Pembayaran} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/pembayaran" component={Terimakasih} />
      </switch>
    </div>
  );
}

export default App;
