import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class Success extends Component{

    saveInformation = (e) => {
        const { locations, isPersonalInfo, handleChange } = this.props;
        handleChange(locations, isPersonalInfo);
    }

    render(){
        const {answers, userType, isPersonalInfo } = this.props;
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
                    <h4> Is it personal Information? </h4>
                    <p> { isPersonalInfo ? 'Yes' : 'No'}</p>
                    <div style={{paddingTop: '3%'}}>
                      <Link className='displayButton' onClick={(e) => this.saveInformation(e)} to='/obligations'>
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
