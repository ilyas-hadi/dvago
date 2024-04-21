import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Product } from "../../redux/store"; 
import styles from "./addToCart.module.css"

const Cart: React.FC = () => {
  const { cartItem } = useSelector((state: RootState) => state.cart);

  console.log("Cart Data:", cartItem); // Log the cart data to console

  const calculateTotalPrice = () => {
    return cartItem.reduce(
      (total, product) =>
        total + parseFloat(product.Price) * (product.count || 1),
      0
    );
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItem.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItem.map((product: Product) => (
            <div key={product.ID} className={styles.card_prod}>
              <h3>{product.Title}</h3>
              <div className={styles.main_pd}>
                <div className={styles.addImgholderd}>
                  <img
                    src={product.ProductImage}
                    alt={product.Title}
                    style={{ width: "100px", height: "auto" }}
                  />
                </div>
                <div className={styles.add_tedetail}>
                  <p>Price: {product.Price}</p>
                  <p>Brand: {product.Brand}</p>
                </div>
                <div className={styles.productCount}>
                <span>{product.count}</span>
              </div>
              </div>
             
            </div>
          ))}
          <p className={styles.TotalPrice}><span>Total Price:</span> Rs. {calculateTotalPrice().toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
