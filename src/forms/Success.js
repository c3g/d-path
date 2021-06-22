import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';

import {getSteps} from '../utils/Steps.js';

class Success extends Component{

    render(){
        const { answers, userType, isPersonalInfo, infoType, processor, province, isHealthInfo, crossesBorders, areServicesOffered  } = this.props.assessment;
        const user = (
          <div>
            <h4> Type of user: </h4>
            <p> { userType ? 'Processor' : userType } </p>
          </div>
        )

        const servicesOffered = (
          <div>
            <h6> Were services offered? </h6>
            <p>{ areServicesOffered ? 'Yes' : 'No' }</p>
          </div>
        )

        const crossingBorders = (
          <div>
            <h4> Is the information crossing borders?: </h4>
            <p> { crossesBorders ? 'Yes' : 'No' } </p>
          </div>
        )

        const healthInfo = (
          <div>
            <h4> Is the information health information?: </h4>
            <p> { isHealthInfo ? 'Yes' : 'No' } </p>
          </div>
        )

        /*const getOtherCountries = () => {
          const valuesToRemove = ["Canada", "Europe", "United States"];
          return Array.from(new Set(locations.filter((i) => !valuesToRemove.includes(i))));
        }*/

        const {step, assessment} = this.props;
        const Steps = getSteps(step, assessment.userType);

        return(
          <Container className='MainForm'>
            <Jumbotron className='MainForm__content'>
              {Steps}
              <div>
                <h1 className='ui centered'> Summary </h1>
                  <Row className='summaryInfo'>
                    <Col lg={6}>
                      <h4> Locations selected :</h4>
                      <div>
                          <h6>Where is the organization/project?</h6>
                          <p>{answers.organization}</p>
                      </div>
                      <div>
                          <h6>Where is the monitored behaviour of the data donors?</h6>
                          <p>{answers.dataDonors}</p>
                      </div>
                      { areServicesOffered !== undefined ? servicesOffered : null }
                      { isPersonalInfo ? user : null }
                      { crossesBorders !== undefined ? crossingBorders: null}
                    </Col>
                    <Col lg={6}>
                      { isPersonalInfo ? null : user }
                      { isHealthInfo !== undefined ? healthInfo: null}
                      <div>
                        <h4> Information type </h4>
                        <p> { infoType } </p>
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
                        <p> {province && (province.name) }</p>
                      </div>
                      { /*
                      <div>
                        <h4> {processor && processor.body && ('Applicable Legislation(s)')} </h4>
                        {processor && processor.laws.map(law => {
                          return <p> {law}</p>
                        })}
                        {getOtherCountries().map(country => {
                          return <p> Privacy Legislation of {country} </p>
                         })
                        }
                      </div>
                      */ }
                      <div style={{paddingTop: '3%'}}>
                        <Link className='displayButton' to='/obligations'>
                          Display Laws, Regulations and Best Practices
                        </Link>
                      </div>
                    </Col>
                  </Row>
                  <div style={{marginTop: '1rem', marginLeft: '45%'}} className='MainForm__buttons'>
                    <Link className='resetButton' to='/' onClick={this.props.resetAssessment}>
                      <Icon name='refresh' /> Reset
                    </Link>
                  </div>
              </div>
            </Jumbotron>
          </Container>
        )
    }
}

export default Success;
