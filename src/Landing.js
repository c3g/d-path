import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Image, Card} from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <Container>
        <div>
          <Jumbotron>
            <h1 className='text-center' style={{ fontSize: '45px', fontWeight: '300', marginBottom: '1em' }}>
              Welcome to the D-PATH Tool
            </h1>
            <Image src={require('./media/logoD-Path.png')} width='600' height='250' style={{ marginLeft: '14rem'}} />
            <p style={{ fontSize: '20px', fontWeight: '300', margin: '0 auto 3em', width: '80ch', maxWidth: '100%' }}>
              D-PATH (Data Privacy Assessment Tool for Health) is a privacy assessment tool for the sharing of health-related data
              that aims to guide researchers, data hosts, and service providers such as cloud computing companies, in protecting the privacy and confidentiality
              of the human health-related datasets they process in a manner that is in agreement with the applicable legal, professional and ethical norms.
            </p>
            <div className='text-center'>
              <Link to='/assessment/user' className='btn btn-primary btn-lg'>
                Start My Assessment
              </Link>
            </div>
          </Jumbotron>
          <Card body
          style={{
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
          <h4> <strong> Disclaimer </strong> </h4>
          <hr />
          The content displayed at the end of using D-PATH (List of obligations and requirements) is provided only for general information purposes with the intention to give you an initial general idea of what type of obligations you may have to comply with. It does NOT constitute legal or other professional advice. Users of D-PATH are therefore advised and encouraged to seek proper legal advice.
          </Card>
        </div>
      </Container>
    );
  }
}

export default Landing;
