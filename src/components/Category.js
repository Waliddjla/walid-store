import React from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../Fetcher';
import CategoryProduct from './categoryProduct';

const Category = ({id, title, onCategoryClick} ) => {
  const[products, setProduct] = React.useState({errorMessage: '', data: [], });
  const {categotyId}= useParams();
  React.useEffect(() => {
    const fetchData = async () => {
      const responesOBject = await getProduct(categotyId);
      setProduct(responesOBject);
    }
    fetchData();
  }, [categotyId]);
  const renderProducts = () => {
    return products.data.map(p => <CategoryProduct key ={p.id} {...p}>{p.title}=</CategoryProduct>);
   }
 
  return (
    <div>
      {products.errorMessage && ( <div>Error: {products.errorMessage} </div> )}
      { products.data && renderProducts() }
    </div>
    )
};

export default Category;