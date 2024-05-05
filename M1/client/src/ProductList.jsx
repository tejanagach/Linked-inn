import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const addtocart=async(id)=>{
    console.log(id);
    const email = localStorage.getItem("email");
    const resp =await  axios.post('http://localhost:3001/addtocart',{email,id});
    console.log(resp);
  }
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={()=>addtocart(product._id)}>Add to cart</button>
            {/* Add purchase button and logic */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
