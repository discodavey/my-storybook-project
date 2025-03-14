import React from "react";
import Button from "../atoms/Button";
import './Redgate.css';

const Redgate: React.FC< { products: {name: string, description: string, logo: string, free: boolean} [] } > = ({ products }) => {
  return (
    <div className="products-container">
      <h3>Redgate</h3>
        <div className="products">
          {
            products.map((product) =>
              <div className="product">
                <div className="product-name">
                  <img src={product.logo} alt="Image to go here" />
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <div className="product-version">{product.free ? "Free" : "Cost"}</div>
                </div>
              </div>
            )
          }
        </div>
      <Button label="What food do I love" onClick={() => alert("Cheeseburgers")} />
    </div>
  );
};

export default Redgate;
