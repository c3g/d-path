import React, {Component} from "react";

import {Navbar} from "react-bootstrap";

class SiteHeader extends Component {
    render() {
        return (
          <Navbar bg="dark" variant="white">
            <Navbar.Brand>
              <img
                alt=""
                src={require("./public/logo.png")}
                width="170"
                height="60"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>

            <Navbar.Collapse className="justify-content-end ">
              <Navbar.Text
                style={{color:'white', padding:20}}
                className="blockquote mb-0 ">
                  D-Path
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default SiteHeader;
