import React from 'react';

const CategoryProduct = ({title, image, specs, features, price, stock }) => {
  return (
   <article>
    <div className='category-product-title'>
        {title}
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
            {features?.map((f) => {
                return <li>{f}</li>
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
            <button>View product</button>
            <button>add to basket</button>
        </div>
    </aside>
   </article>
  )
}

export default CategoryProduct;