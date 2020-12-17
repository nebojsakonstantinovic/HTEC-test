import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* <LinkContainer to="/">
            <Navbar.Brand>Htec</Navbar.Brand>
          </LinkContainer> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/" exact>
                <Nav.Link>Top News</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Categories">
                <Nav.Link>Categories</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Search">
                <Nav.Link>Search</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="language-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/en">
                <Nav.Link>EN</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/us">
                <Nav.Link>US</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
