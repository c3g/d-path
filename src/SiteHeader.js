import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav } from 'react-bootstrap';

//import "bootstrap/dist/css/bootstrap.min.css";

class SiteHeader extends Component {

    showSettings (event) {
      event.preventDefault();
    }

    render() {
        return (
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', marginBottom: '2rem' }}>
          <Navbar expand={false} collapseOnSelect >
            <Navbar.Brand>
                <Link to='/'>
                    <img
                        alt=''
                        src={require('./media/C3GLogo.png')}
                        width='170'
                        height='60'
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Brand style={{marginLeft: "65%"}}>
                <Link to='/'>
                    <img
                        alt=''
                        src={require('./media/logoD-Path.png')}
                        width='170'
                        height='60'
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/" className='navButton'> Home </Link>
                <Link to="/about-us" className='navButton'> About Us </Link>
                <Link to="/terminology" className='navButton'> Terminology </Link>
                <Link to="/disclaimer" className='navButton'> Disclaimer </Link>
                <Link to="/privacy-policy" className='navButton'> Privacy Policy </Link>
                <Link to="/license" className='navButton'> License </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          </div>
        );
    }
}

export default SiteHeader;
