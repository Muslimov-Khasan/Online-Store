import React, { memo } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <Link className="nav__logo" to={"/"}>
            Online Store
          </Link>
          <Link to={"/cart"}>
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default memo(Navbar);