import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class Success extends Component{

    render(){
        const { answers, userType, isPersonalInfo, isPublic, infoType, processor, province } = this.props.assessment;
        const user = (
          <div>
            <h4> Type of user: </h4>
            <p> { userType ? 'Processor' : userType } </p>
          </div>
        )
        return(
            <div>
              <h1 className='ui centered'> Summary </h1>
                <Row className='summaryInfo'>
                  <Col lg={6}>
                    <h4> Locations selected :</h4>
                    <div>
                        <h6>Where is the organization?</h6>
                        <p>{answers.organization}</p>
                    </div>
                    <div>
                        <h6>Where is the data processed?</h6>
                        <p>{answers.dataProcessed}</p>
                    </div>
                    <div>
                        <h6>Where are the data users?</h6>
                        <p>{answers.dataUsers}</p>
                    </div>
                    <div>
                        <h6>Where are the data donors?</h6>
                        <p>{answers.dataDonors}</p>
                    </div>
                    { isPersonalInfo ? user : null }
                  </Col>
                  <Col lg={6}>
                    { isPersonalInfo ? null : user }
                    <div>
                      <h4> Information type </h4>
                      <p> { infoType }</p>
                    </div>
                    <div>
                      <h4> Is it public information? </h4>
                      <p> { isPublic ? 'Yes' : 'No'}</p>
                    </div>
                    <div>
                      <h4> Is it personal information? </h4>
                      <p> { isPersonalInfo ? 'Yes' : 'No'}</p>
                    </div>
                    <div>
                      <h4> {processor && ('Who processes the information?')} </h4>
                      <p> {processor && (processor.body) }</p>
                    </div>
                    <div>
                      <h4> {province && ('In which province is the information processed?')} </h4>
                      <p> {province && (province) }</p>
                    </div>
                    <div>
                      <h4> {processor && processor.body && ('Applicable Legislation')} </h4>
                      <p> {processor && (processor.laws) }</p>
                    </div>
                    <div style={{paddingTop: '3%'}}>
                      <Link className='displayButton' to='/obligations'>
                        Display Laws, Regulations and Best Practices
                      </Link>
                    </div>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default Success;
