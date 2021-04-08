import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Icon from 'react-fontawesome';
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
            The content displayed at the end of using D-PATH (List of obligations and requirements) is provided only for general information purposes with the intention to give you an initial general idea of what type of obligations you may have to comply with.  It does NOT constitute legal or other professional advice. Users of D-PATH are therefore advised and encouraged to seek proper legal advice.
            </p>
            <div className='text-center' style={{marginTop: '1rem'}}>
              <Link to='/' className='btn btn-primary btn-lg'>
              <Icon name="home"/>    Back
              </Link>
            </div>
          </Jumbotron>
        </div>
      </Container>
    );
  }
}

export default Disclaimer;
