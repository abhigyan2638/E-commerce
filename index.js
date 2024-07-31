import React from 'react';

const products = [
  { id: 1, name: 'Product A', price: 19.99, image: 'product1.jpg' },
  { id: 2, name: 'Product B', price: 29.99, image: 'product2.jpg' },
  // ... more products
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          {/* Add more product details as needed */}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
