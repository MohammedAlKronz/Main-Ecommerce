import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 text-dark" to="/">
          M7md E-commerce
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link fw-bold mx-2" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold mx-2" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold mx-2" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold mx-2" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="text-center">
            <NavLink to="/login" className="btn btn-outline-primary me-2">
              <i className="fas fa-sign-in-alt me-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-success me-2">
              <i className="fas fa-user-plus me-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-danger text-white">
              <i className="fas fa-cart-shopping me-1"></i> Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
