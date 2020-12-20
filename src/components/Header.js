import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { changeLanguage } from '../actions/languageActions';

const Header = () => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const { country, disabled } = language;

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
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
              <Nav.Link
                className={`${country === 'gb' && 'active'} ${
                  disabled && 'disabled'
                }`}
                onClick={() => dispatch(changeLanguage('gb'))}
              >
                EN
              </Nav.Link>

              <Nav.Link
                className={`${country === 'us' && 'active'} ${
                  disabled && 'disabled'
                }`}
                onClick={() => dispatch(changeLanguage('us'))}
              >
                US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
