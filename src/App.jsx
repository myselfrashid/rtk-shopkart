import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './Features/productReducer';
import './App.css';

function App() {
  const fetchItems = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <>
      {/* <h1>List of Products</h1>
      {fetchItems.loading && <p>Loading Products...</p>}
      {!fetchItems.loading && fetchItems.error ? <p>{products.error}</p> : ""}
      {!fetchItems.loading && fetchItems.products.length > 0 ?
        <div>
          <ul>
            {fetchItems.products.map(product => (<li key={product.id}>{product.title}</li>))}
          </ul>
        </div> : null} */}
    </>
  )
}

export default App
