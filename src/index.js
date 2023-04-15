import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductDetail from './components/productDetail';
import Basket from './components/basket';
import Checkout from './components/checkout';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="basket" element={<Basket></Basket>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
        <Route path="products/:productId" element={<ProductDetail></ProductDetail>}></Route>
    </Routes>

    </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')

);