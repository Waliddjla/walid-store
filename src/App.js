import './App.css';
import React, {useState} from 'react';
import { getCategorie } from './Fetcher';
import ProductDetail from './components/productDetail';
import Basket from './components/basket';
import Checkout from './components/checkout';
import Category from './components/Category';
import Layout from './components/layout';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


function App () {
  const [categorie, setCategorie] = useState( {errorMessage: '', data: []});
  React.useEffect(() => {
    const fetchData = async () => {
    const responesOBject = await getCategorie();
    setCategorie(responesOBject);
  }
  fetchData();
  }, []);

  return (
    <React.Fragment>
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout categorie={categorie}/>}>
        <Route path="basket" element={<Basket></Basket>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
        <Route path="products/:productId" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="categories/:categotyId" element={<Category></Category>}></Route>
        </Route>
    </Routes>

    </BrowserRouter>
</React.Fragment>
  );

}

export default App;