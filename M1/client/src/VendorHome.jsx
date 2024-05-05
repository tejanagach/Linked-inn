// VendorHome.jsx
import React from 'react';
import ProductList from './ProductList'; // Component for displaying uploaded products
import ProductUploadForm from './ProductUploadForm';

const VendorHome = () => {
  return (
    <div>
      <h2>Vendor Home Page</h2>
      <ProductUploadForm /> {/* Form for uploading new products */}
      <ProductList /> {/* Display list of uploaded products */}
    </div>
  );
};

export default VendorHome;
