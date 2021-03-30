import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container} from 'react-bootstrap';

class Disclaimer extends Component {
  render() {
    return (
      <Container>
        <div>
          <Jumbotron>
            <h1 className='text-center' style={{ fontSize: '45px', fontWeight: '300', marginBottom: '1em' }}>
              Disclaimer
            </h1>
            <p style={{ fontSize: '20px', fontWeight: '300', margin: '0 auto 3em', width: '80ch', maxWidth: '100%' }}>
              D-PATH (Data Privacy Assessment Tool for Health) is a privacy assessment tool for the sharing of health-related data
              that aims to guide researchers, data hosts, and service providers such as cloud computing companies, in protecting the privacy and confidentiality
              of the human health-related datasets they process in a manner that is in agreement with the applicable legal, professional and ethical norms.
            </p>
            <div className='text-center'>
              <Link to='/' className='btn btn-primary btn-lg'>
                Back
              </Link>
            </div>
          </Jumbotron>
        </div>
      </Container>
    );
  }
}

export default Disclaimer;
