import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { Context } from "../../..";

const NavbarComponent = () => {
  const { store } = useContext(Context);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">Bakery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {store.isAuth && store.user.role === "admin" && (
              <Nav.Link href="#user/dashboard">Dashboard</Nav.Link>
            )}
            <Nav.Link href="#product/baking">Baking</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#product/cakes">Cakes</NavDropdown.Item>
              <NavDropdown.Item href="#product/pies">Pies</NavDropdown.Item>
              <NavDropdown.Item href="#product/cookies">
                Cookies
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {store.isAuth ? (
              <Nav.Link
                href="#"
                onClick={() => {
                  store.logout();
                }}
              >
                Logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link href="#user/register">Register</Nav.Link>
                <Nav.Link href="#user/login">Login</Nav.Link>
              </>
            )}
            {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

            <Nav.Link href="#cart" className="text-decoration-none mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default observer(NavbarComponent);
