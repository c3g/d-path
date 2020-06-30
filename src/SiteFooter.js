import React, {Component} from "react";
import { Container} from "react-bootstrap";

class SiteFooter extends Component {
    render() {
        return (
          <Container>
            <div className='container' style={{'padding-top':'10%'}} >
              <footer className='footer mt-auto py-3 text-white'>
              <div style={{float:'left', display:'flex'}}>
                  <p
                      style={{
                        'font-size':12
                      }}
                  > For information you can contact us at admin@c3g.ca <br/>
                    740 Dr. Penfield Avenue, Room 6103 <br/>
                    Montréal, QC, Canada   H3A 0G1 <br/>
                    Copyright © 2020 EpiShare. All rights reserved.
                  </p>
                </div>
                <div>
                  <img
                    style={{
                      width:150,
                      height:60,
                      float:'left',
                      'padding-left': 25
                    }}
                    src={require('./media/epishare.svg')}/>
                </div>
              </footer>
            </div>
          </Container>
        )
    }
}

export default SiteFooter;
