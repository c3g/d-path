import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Navbar} from 'react-bootstrap';

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
              <Navbar.Text
                style={{color: 'white', padding: '20px'}}
                className='blockquote mb-0'>
                  D-Path
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default SiteHeader;
