import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class Success extends Component{

    render(){
        const { answers, userType, isPersonalInfo, infoType, processor, province } = this.props.assessment;
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
                  </Col>
                  <Col lg={6}>
                    <h4> Type of User: </h4>
                    <p> { userType } </p>
                    <h4> Information type </h4>
                    <p> { infoType }</p>
                    <h4> Is it personal Information? </h4>
                    <p> { isPersonalInfo ? 'Yes' : 'No'}</p>
                    <h4> {processor && ('Who processes the information?')} </h4>
                    <p> {processor && (processor.body  + ' : ' + processor.laws) }</p>
                    <h4> {province && ('In which province is the information processed?')} </h4>
                    <p> {province && (province) }</p>
                    <div style={{paddingTop: '3%'}}>
                      <Link className='displayButton' to='/obligations'>
                        Display Laws and Regulations
                      </Link>
                    </div>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default Success;
