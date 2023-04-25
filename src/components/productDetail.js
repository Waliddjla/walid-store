import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../Fetcher';

const ProductDetail = () => {
  const[products, setProduct] = useState({errorMessage: '', data: {} });
  const {productId }= useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const responesOBject = await getProductById(productId);
      setProduct(responesOBject);
    }
    fetchData();
  }, [productId]);

  const creatMarkup = () => {
    return {__html: products.data?.description}
  }


  return (
    <article>
    <div className='category-product-title'>
      {products.data.title}
    </div>
    <figure>
        <div className='category-product-image-container'>
            <img src={`/assets/$${products.data.image}`} alt= {products.data.title}/>
        </div>
    </figure>
    <aside>
        <div className='category-product-info-dimensions'>
            <h1>Dimensions</h1>
            <label>{products.data.dimensions}</label>
        </div>
        {products.data.capacity &&
        <div className='category-product-info-capacity'>
            <h1>Capacity</h1>
            <label>{products.data.capacity}</label>
        </div>
    }
    <div className='category-product-info-features'>
        <h3>Features</h3>
        <ul>
            {products.data.features?.map((f, i) => {
                return <li key={`features${i}`}>{f}</li>
            })}
        </ul>
    </div>
    </aside>
    <aside className='category-product-info-finance'>
        <div className='category-product-finance-price'>
            &pound;{products.data.price}
        </div>
        <div className='category-product-info-stock'>
            <label>Stock level: {products.data.stock}</label>
            <label>Free delivery</label>
        </div>
        <div className='category-product-action'>
            <button>add to basket</button>
        </div>
    </aside>
    <div className='product-description' dangerouslySetInnerHTML={creatMarkup()}></div>
   </article>
  )
}

export default ProductDetail;