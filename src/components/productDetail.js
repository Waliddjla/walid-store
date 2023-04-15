import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../Fetcher';

const ProductDetail = () => {
  const[product, setProduct] = React.useState({errorMessage: '', data: []});
  const {productId }= useParams();
  React.useEffect(() => {
    const fetchData = async () => {
      const responesOBject = await getProductById(productId);
      setProduct(responesOBject);
    }
    fetchData();
  }, [productId]);
  return (
    <div>ProductDetail id: {productId} title: {product.data.title}</div>
  )
}

export default ProductDetail;