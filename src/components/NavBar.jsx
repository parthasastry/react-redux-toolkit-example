import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const NavBar = () => {
  //cart is the name of the Slice in store.js
  const cartProducts = useSelector((state) => state.cart);

  return (
    <>
      <Navbar bg="light" expanded="lg">
        <Navbar.Brand>Redux Toolkit</Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0 style={{ maxHeight: '100px'}} navbarScroll">
          <Nav.Link to="/" as={Link}>
            Products
          </Nav.Link>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>
                My Bag {cartProducts.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
