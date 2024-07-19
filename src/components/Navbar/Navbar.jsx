import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* <!-- Nav bar  -->  */}
      <nav class="nav_container">
        <div class="nav_left">
          <Link to="/">
            <img
              src="https://www.custify.com/blog/wp-content/uploads/2020/12/help-scout-vector-logo.png"
              alt="scoutLogo"
            />
          </Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div class="nav_right">
          <Link to="/Login">
            <button>Login</button>
          </Link>
          <button>Free Trial</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
