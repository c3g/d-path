import React, {Component} from "react";
import { Container, Row, Col} from "react-bootstrap";

class SiteFooter extends Component {
    render() {
        return (
          <Container>
            <div
              className='container'
              style={{
                position:"float-left",
                left:0,
                bottom:"0%",
                right:0,
                borderTop: " 2px solid black",
              }} >
              <footer className='footer mt-auto py-3 text-white'>
                <Row>
                  <Col md={4} xs={12} s={12}>
                    <div style={{float:'left', display:'flex'}}>
                    <p
                        style={{
                          fontSize:12
                        }}
                      > For information you can contact us at admin@c3g.ca <br/>
                        740 Dr. Penfield Avenue, Room 6103 <br/>
                        Montréal, QC, Canada   H3A 0G1 <br/>
                        Copyright © 2020 EpiShare. All rights reserved.
                      </p>
                    </div>
                  </Col>
                  <Col md='auto' xs={12} s={12}>
                    <div>
                        <img
                          style={{
                            width:120,
                            height:60,
                            float:'left',
                          }}
                          src={require('./media/epishare.svg')}/>
                      </div>
                  </Col>
                  <Col  md={4} xs={12} s={12}>
                      <div>
                        <img
                          style={{
                            width:400,
                            height:100,
                            float:'left',
                          }}
                          src={require('./media/mcgill.png')}/>
                      </div>
                  </Col>
                </Row>
              </footer>
            </div>
          </Container>
        )
    }
}

export default SiteFooter;
