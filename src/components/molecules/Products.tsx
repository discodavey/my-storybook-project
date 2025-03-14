import React from "react";
import Button from "../atoms/Button";
import './Products.css';

const Products: React.FC< { products: {id: number, title: string, price: string} [] } > = ({ products }) => {
  return (
    <div className="products-container">
      <h3>Products</h3>
        <div className="products">
          {
            products.map((product) =>
              <div className="product">
                <div key={product.id} className="product-name">{product.title}</div>
                <div className="product-price">{product.price}</div>
              </div>
            )
          }
        </div>
      <Button label="What food do I love" onClick={() => alert("Cheeseburgers")} />
    </div>
  );
};

export default Products;
