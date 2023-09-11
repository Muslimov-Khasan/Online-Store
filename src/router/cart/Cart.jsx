import React, { useMemo, memo } from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import "./Cart.scss";

function Cart() {
  const cart = useSelector((s) => s.cart.value);

  const totalPrice = useMemo(() => {
    return cart?.reduce((a, b) => a + b.price * b.quantity, 0);
  }, [cart]);
  return (
    <div className="cart">
      <div className="cart__total">
        <h2>Count: {cart.length}</h2>
        <h2>Total price: {totalPrice?.brm()} USD</h2>
      </div>
      <Products cart={true} data={cart} />
    </div>
  );
}

export default memo(Cart);