import React, { useState } from 'react';
import axios from 'axios';

const ProductUploadForm = ({ updateProductList }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send product data to backend
      await axios.post('http://localhost:3001/products', formData);
      // Clear form after successful submission
      setFormData({ name: '', description: '', price: 0 });
      // Fetch updated product list from backend
      updateProductList();
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <div>
      <h3>Upload Product</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        {/* Add more input fields for additional product details */}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ProductUploadForm;
