import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout({categorie}) {
    const renderCategories =() => {
        return categorie.data.map(c => 
          <li key ={c.id}><Link to = {`/categories/${c.id}`}>{c.title}</Link></li>
          );
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
        <Outlet/>
      </main>
    </section>
    <footer>
      <Link to="/">Home</Link> | <Link to="/basket">Basket</Link>
    </footer>
</React.Fragment>
  )
}

export default Layout;