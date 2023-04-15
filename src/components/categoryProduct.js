import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const CategoryProduct = ({id, title, image, specs, features, price, stock }) => {
    const navigate = useNavigate();
  return (
   <article>
    <div className='category-product-title'>
        <Link to={`products/${id}`}>{title}</Link>
    </div>
    <figure>
        <div className='category-product-image-container'>
            <img src={`./assets/${image}`} alt= {title}/>
        </div>
    </figure>
    <aside>
        <div className='category-product-info-dimensions'>
            <h1>dimensions</h1>
            <label>{specs.dimensions}</label>
        </div>
        {specs.capacity &&
        <div className='category-product-info-capacity'>
            <h1>capacity</h1>
            <label>{specs.capacity}</label>
        </div>
    }
    <div className='category-product-info-features'>
        <h3>Features</h3>
        <ul>
            {features?.map((f, i) => {
                return <li key={`features${i}`}>{f}</li>
            })}
        </ul>
    </div>
    </aside>
    <aside className='category-product-info-finance'>
        <div className='category-product-finance-price'>
            &pound;{price}
        </div>
        <div className='category-product-info-stock'>
            <label>Stock level: {stock}</label>
            <label>Free delivery</label>
        </div>
        <div className='category-product-action'>
            <button onClick={() => navigate(`products/${id}`)}>View product</button>
            <button>add to basket</button>
        </div>
    </aside>
   </article>
  )
}

export default CategoryProduct;