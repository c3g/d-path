import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, DropdownButton} from 'react-bootstrap';

class SiteHeader extends Component {
    render() {
        return (
          <Navbar variant='white' >
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

            <Navbar.Collapse className='justify-content-end'>
              <DropdownButton style={{marginRight: "2rem"}}id="dropdown-primary-button" size="lg" variant="secondary" title="Menu">
                <Link to="/about-us" className='navButton'> About Us </Link>
                <Link to="/terminology" className='navButton'> Terminology </Link>
                <Link to="/privacy-policy" className='navButton'> Privacy Policy </Link>
                <Link to="/disclaimer" className='navButton'> Disclaimer </Link>
              </DropdownButton>

              <Navbar.Text
                style={{color: 'white', padding: '20px'}}
                className='blockquote mb-0'>
                  D-PATH
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default SiteHeader;
