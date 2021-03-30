import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Accordion, Card, Button} from 'react-bootstrap';

class Terminology extends Component {
  render() {
    return (
      <Container>
        <div>
          <Jumbotron>
            <h1 className='text-center' style={{ fontSize: '45px', fontWeight: '300', marginBottom: '1em' }}>
              Terminology
            </h1>
            <Accordion >
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Anonymized information
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Refers to information that has been irrevocably stripped from all direct identifiers.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Anonymous information
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body> Refers to information that has never been identifiable.</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
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

export default Terminology;
