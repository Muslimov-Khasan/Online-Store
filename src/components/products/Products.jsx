import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementCart, removeFromCart } from "../../context/cart";
import "./Products.scss";
import { FiTrash2 } from "react-icons/fi";

function Products({ data, cart }) {
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      {data?.map((item) => (
        <div key={item.id} className="card">
          <img src={item.images[0]} alt="" />
          <h3>{item.title}</h3>
          <h2>{item.price?.brm()} USD</h2>
          {cart ? (
            <div className="pro__btns">
              <button
                disabled={item.quantity <= 1}
                onClick={() => dispatch(decrementCart(item))}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(addToCart(item))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                <FiTrash2 />
              </button>
            </div>
          ) : (
            <button
              className="pro__btn"
              onClick={() => dispatch(addToCart(item))}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default memo(Products);