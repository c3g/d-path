import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Jumbotron, Button, Container} from 'react-bootstrap';

class Landing extends Component {
    render() {
        return (
          <Container>
            <div>
              <Jumbotron>
                <h1>Welcome to the D-Path Tool</h1>
                <p>
                  D-PATH (Data Privacy Assessment Tool for Health) is a privacy assessment tool for the sharing of health-related data
                  that aims to guide researchers, data hosts, and service providers such as cloud computing companies, in protecting the privacy and confidentiality
                  of the human health-related datasets they process in a manner that is in agreement with the applicable legal, professional and ethical norms.
                </p>
                <p>
                  <Link to="/start">
                    <Button variant="primary"> Start  </Button>
                  </Link>
                </p>
              </Jumbotron>
            </div>
          </Container>
        );
    }
}

export default Landing;
