import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Jumbotron, Button, Container} from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <Container>
        <div>
          <Jumbotron>
            <h1 className='text-center' style={{ fontSize: '45px', marginBottom: '1em' }}>
              Welcome to the D-Path Tool
            </h1>
            <p style={{ fontSize: '20px', margin: '0 auto 3em', width: '80ch', maxWidth: '100%' }}>
              D-PATH (Data Privacy Assessment Tool for Health) is a privacy assessment tool for the sharing of health-related data
              that aims to guide researchers, data hosts, and service providers such as cloud computing companies, in protecting the privacy and confidentiality
              of the human health-related datasets they process in a manner that is in agreement with the applicable legal, professional and ethical norms.
            </p>
            <div className='text-center'>
              <Link to='/start' className='btn btn-primary btn-lg'>
                Start My Assessment
              </Link>
            </div>
          </Jumbotron>
        </div>
      </Container>
    );
  }
}

export default Landing;
