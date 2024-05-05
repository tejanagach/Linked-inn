import React from 'react';
import ProductList from './ProductList'; // Corrected import statement

const UserHome = () => {
  return (
    <div>
      <h2>User Home</h2>
      <ProductList /> {/* Use ProductList component here */}
    </div>
  );
};

export default UserHome;
