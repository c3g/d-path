import React, {Component} from 'react';
import styled from 'styled-components';
import { Container, Row, Col} from 'react-bootstrap';
import Icon from 'react-fontawesome';

const Field = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: row;

  div {
    flex: 0 0 auto;
    margin-right: 1em;
  }
  p {
    flex: 1;
    margin-bottom: 0;
  }
`

class SiteFooter extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        <Container>
          <footer className='footer mt-auto py-3 text-white'>
            <Row>
              <Col md={5} xs={12} s={12} style={{ display: 'flex', flexDirection: 'row' }}>
                <img
                  alt='epishare'
                  src={require('./media/epishare.svg')}
                  style={{
                    width: 100,
                    height: 50,
                    marginRight: '20px',
                  }}
                />
                <img
                  alt='cgp'
                  src={require('./media/cgpLOGO.svg')}
                  style={{
                    height: 38,
                  }}
                />
              </Col>
              <Col md={7} xs={12} s={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Row>
                  <Col md={3} s={12}>
                    <Field>
                      <div>
                        <Icon name='envelope' />
                      </div>
                      <p>
                        admin@c3g.ca
                      </p>
                    </Field>
                  </Col>
                  <Col md={6} s={12}>
                    <Field>
                      <div>
                        <Icon name='address-card' />
                      </div>
                      <p className='text-nowrap'>
                        740 Dr. Penfield Avenue, Room 6103 <br/>
                        Montréal, QC, Canada
                        H3A 0G1
                      </p>
                    </Field>
                  </Col>
                  <Col md={3} s={12}>
                    <Field>
                      <div>
                        <Icon name='copyright' />
                      </div>
                      <p className='text-nowrap'>
                        2020 EpiShare
                      </p>
                    </Field>
                  </Col>
                </Row>
              </Col>
            </Row>
          </footer>
        </Container>
      </div>
    )
  }
}

export default SiteFooter;
