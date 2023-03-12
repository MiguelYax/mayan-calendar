import React from 'react';
import {
  Container, Nav, Navbar,
} from 'react-bootstrap';

import PropTypes from 'prop-types';

function Navigation({ darkMode, setDarkMode }) {
  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'}>
      <Container>
        <Navbar.Brand href="#home">Mayan Calendar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#pricing" onClick={() => { setDarkMode(!darkMode); }}>
            {' '}
            {darkMode ? 'Light mode' : 'Dark mode'}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  );
}

Navigation.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Navigation;
