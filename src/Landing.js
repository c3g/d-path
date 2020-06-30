import React, {Component} from "react";

import {Jumbotron, Button, Container} from "react-bootstrap";

class Landing extends Component {
    render() {
        return (
          <Container>
          <div style={{'padding-top':20}}>
              <Jumbotron>
                <h1>Welcome to the D-Path Tool</h1>
                  <p>
                    D-PATH (Data Privacy Assessment Tool for Health) is a privacy assessment tool for the sharing of health-related data
                    that aims to guide researchers, data hosts, and service providers such as cloud computing companies, in protecting the privacy and confidentiality
                    of the human health-related datasets they process in a manner that is in agreement with the applicable legal, professional and ethical norms.
                  </p>
                  <p>
                    <Button variant="primary">Start</Button>
                  </p>
              </Jumbotron>
            </div>
          </Container>
        );
    }
}

export default Landing;
