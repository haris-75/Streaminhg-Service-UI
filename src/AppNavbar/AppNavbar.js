import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from '../assets/logo.svg';
import './AppNavbar.scss';

function AppNavbar() {
  const [navbarFlag, setNavbarFlag] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarFlag(true);
    } else {
      setNavbarFlag(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <Navbar
      expand='lg'
      className={`${navbarFlag ? 'is-fixed' : 'bg-transparent'} app-nav`}
      sticky='top'
    >
      <Container>
        <Navbar.Brand href='#home'>
          <Logo width={200} fill='white'></Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto app-navbar-nav app-nav-link'>
            <Nav.Link href='#movies'>
              MOVIES
              <div className='nav-link-bar'></div>
            </Nav.Link>

            <Nav.Link href='#tvshows'>
              TV SHOWS <div className='nav-link-bar'></div>
            </Nav.Link>

            <Nav.Link href='#arabic'>
              ARABIC <div className='nav-link-bar'></div>
            </Nav.Link>

            <Nav.Link href='#kids'>
              KIDS <div className='nav-link-bar'></div>
            </Nav.Link>
          </Nav>
          <Nav className='app-navbar-nav app-nav-btn'>
            <Nav.Link href='#deets'>Log in</Nav.Link>
            <Nav.Link href='#memes'>Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
