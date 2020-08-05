import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Navbar} from 'react-bootstrap';

class SiteHeader extends Component {
    render() {
        return (
          <Navbar variant='white' style={{ marginBottom: '1em' }}>
            <Navbar.Brand>
                <Link to='/'>
                    <img
                        alt=''
                        src={require('./media/logo.png')}
                        width='170'
                        height='60'
                        className='d-inline-block align-top'
                    />
                </Link>
            </Navbar.Brand>

            <Navbar.Collapse className='justify-content-end'>
              <Navbar.Text
                style={{color: 'white', padding: 20}}
                className='blockquote mb-0'>
                  D-Path
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default SiteHeader;
