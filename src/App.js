import './App.css';
import React, {useState} from 'react';
import Category from './components/Category';
import { getCategorie, getProduct } from './Fetcher';
import CategoryProduct from './components/categoryProduct';


function App () {
  const [categorie, setCategorie] = useState( {errorMessage: '', data: []});
  const [products, setProducts] = useState({errorMessage: '', data: []});


  React.useEffect(() => {
    const fetchData = async () => {
    const responesOBject = await getCategorie();
    setCategorie(responesOBject);
  }
  fetchData();
  }, [])

  const handelCategoryClick = id => {
    const fetchData = async () => {
      const responesOBject = await getProduct(id);
      setProducts(responesOBject);
    }
    fetchData();
    }

const renderCategories =() => {
  return categorie.data.map(c => 
    <Category key ={c.id} id={c.id} title= {c.title} onCategoryClick = {() => handelCategoryClick(c.id)}></Category>
    );
}
const renderProducts = () => {
   return products.data.map(p => <CategoryProduct {...p}>{p.title}=</CategoryProduct>);
  }

  return (
    <React.Fragment>
    <header>My Store</header>


    <section>
      <nav>
      {categorie.errorMessage && <div>Error: {categorie.errorMessage} </div>}
      {categorie.data && renderCategories()}
      </nav>
      <main>
      <h1>Products</h1>
      {products.errorMessage && <div>Error: {products.errorMessage} </div>}
      { products.data && renderProducts() }
      </main>
    </section>
    <footer>
      footer
    </footer>
</React.Fragment>
  );

}

export default App;