import './App.css';
import React, {useState} from 'react';
// import Category from './components/Category';
import { getCategorie, getProduct } from './Fetcher';
import CategoryProduct from './components/categoryProduct';
import { Link } from 'react-router-dom';


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

  // const handelCategoryClick = id => {
  //   const fetchData = async () => {
  //     const responesOBject = await getProduct(id);
  //     setProducts(responesOBject);
  //   }
  //   fetchData();
  //   }

const renderCategories =() => {
  return categorie.data.map(c => 
    <li key ={c.id}><Link to = {`/categories/${c.id}`}>{c.title}</Link></li>
    );
}
const renderProducts = () => {
   return products.data.map(p => <CategoryProduct key ={p.id} {...p}>{p.title}=</CategoryProduct>);
  }

  return (
    <React.Fragment>
    <header>My Store</header>


    <section>
      <nav>
      {categorie.errorMessage && <div>Error: {categorie.errorMessage} </div>}
      <ul>
      {categorie.data && renderCategories()}
      </ul>
      </nav>
      <main>
      </main>
    </section>
    <footer>
      footer
    </footer>
</React.Fragment>
  );

}

export default App;