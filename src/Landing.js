import React, {Component} from "react";

import {Jumbotron, Button, Container} from "react-bootstrap";

class Landing extends Component {
    render() {
        return (
          <Container >
          <Jumbotron>
            <h1>Welcome to the D-Path Tool</h1>
              <p>
                This is a simple tool made by EpiShare.
              </p>
              <p>
                <Button variant="primary">Start</Button>
              </p>
          </Jumbotron>
          </Container>
        );
    }
}

export default Landing;
