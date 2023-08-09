import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import gitHubIcon from '../assets/img/github-icon.png';
import linkedInIcon from '../assets/img/linkedin-icon.png';
// import instaIcon from '../assets/img/instagram-icon.png';
import instaIcon from '../assets/img/instagram.png';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      {/* <Navbar expand="md" className={scrolled ? 'scrolled' : ''}> */}
      <Navbar expand="md" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
                >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
                >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a className='me-3' href="https://github.com/mari0514">
                  <img src={gitHubIcon} alt='' />
                </a>
                <a className='me-3' href="https://www.linkedin.com/in/mari-miyazaki-4404a6247/">
                  <img src={linkedInIcon} alt='' />
                </a>
                <a className='me-3' href="https://www.instagram.com/marie.0514/">
                  <img src={instaIcon} alt='' />
                </a>
              </div>
              <HashLink to='#contact'>
                <button 
                  className='vvd' 
                  onclick={ () => console.log('contact') }
                >
                  <span>Let's Connect!</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}


export default NavBar;