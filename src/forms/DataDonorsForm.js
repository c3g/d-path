import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row, Container, Jumbotron, Card, OverlayTrigger } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import ReactCardFlip from 'react-card-flip';

import {getSteps} from '../utils/Steps.js';
import { LOCATION } from '../constants';
import { select, ConditionalWrapper } from '../utils/Popovers';
import { link  } from '../utils/Link';

class DataDonorsForm extends Component{

  constructor() {
    super();
      this.state = {
      isFlipped: false,
      EUSelected: false,
      nonEUSelected: false,
      optionSelected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }


  select = (location) => {
      if(location === LOCATION.EU) {
          this.setState({
            EUSelected: true,
            nonEUSelected: false,
            optionSelected: true
           });
      }
      else{
          this.setState({
            EUSelected: false,
            nonEUSelected: true,
            optionSelected: true
           });
      }

      this.props.handleLocChange({ type: 'dataDonors', location: location });

  }

  continue = () => {
    if(this.state.optionSelected) this.props.nextStep();
  }

  getLinkTo = () => {
    if(!this.state.optionSelected) return "/assessment/donors"
    else return "/assessment/info/description"
  }

  render(){
      const {step, userType} = this.props;
      const Steps = getSteps(step, userType);
      return(
        <>
        <Container className='MainForm'>
          <Jumbotron className='MainForm__content'>
            {Steps}
            <div className='MainForm__component'>
              <h6
                style={{
                  marginBottom: '1rem',
                  marginTop: '1rem',
                  fontSize: '1em',
                  fontWeight: 'normal',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  opacity: 0.4,
                }}
              >
                Location Information
              </h6>
              <hr />
              <h3 style={{paddingBottom: '2%'}}>  Where were the data subjects/data donors located when their behaviour was being monitored OR when they were being offered goods and services?  </h3>
              <Row className='summaryInfo'>
                <Col style={{marginLeft: '10rem'}} lg={4}>
                  <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOption'>
                       <Card  border={this.state.EUSelected ? 'primary' : ''} className={this.state.EUSelected ? ' selectedCard' : ''}>
                       <Card.Body>
                         <Card.Title style={{
                           margingLeft: '3rem',
                           fontSize: '1rem',
                           fontWeight: 'normal',
                           textTransform: 'uppercase',
                           letterSpacing: 1,
                           opacity: 0.4,
                         }}> European Union </Card.Title>

                         <Card.Img style={{marginBottom: '1rem'}}  src={require('./../media/maps/2-map-200x200.png')} rounded />
                      <Button variant="success" className="selectCardButton" onClick={() => this.select(LOCATION.EU)}> Select </Button>
                      </Card.Body>
                      </Card>
                    </div>
                    <div className="cardOption">
                     <Card border={this.state.EUSelected ? 'primary' : ''} className={this.state.EUSelected ? 'selectedCard' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} > European Union </Card.Title>
                        <Card.Text>
                          It refers to the country members of the European Union and the European Economic Area. The full list of countries belonging to the European Union can be found {link}
                        </Card.Text>
                        <Button variant="success" className="selectCardButton" onClick={() => this.select(LOCATION.EU)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                  </ReactCardFlip>
                  <Button variant="primary" style={{margin: '1rem 5rem', width: '10rem'}} onClick={this.handleClick}> {this.state.isFlipped ? 'Back' : 'More information'} </Button>
                </Col>
                <Col  lg={4}>
                  <div className='cardOption'>
                   <Card  border={this.state.nonEUSelected ? 'primary ' : ''}  className={this.state.nonEUSelected ? 'selectedCard ' : ''}>
                   <Card.Body>
                     <Card.Title style={{
                       margingLeft: '3rem',
                       fontSize: '1rem',
                       fontWeight: 'normal',
                       textTransform: 'uppercase',
                       letterSpacing: 1,
                       opacity: 0.4,
                     }}> Non-Europe </Card.Title>
                     <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/maps/4-map-200x200.png')} rounded />
                  <Button variant="success" className="selectCardButton" onClick={() => this.select(LOCATION.NON_EU)}> Select </Button>
                  </Card.Body>
                  </Card>
                  </div>
                </Col>
              </Row>
            </div>
            <div className='MainForm__buttons'>
              <Link className='resetButton' to='/assessment/recipients'  onClick={this.props.prevStep}>
                <Icon name='arrow-left' /> Previous
              </Link>
              <ConditionalWrapper
                 condition={!this.state.optionSelected}
                 wrapper={children => (
                   <OverlayTrigger
                   placement="right"
                   delay={{ show: 250, hide: 400 }}
                   overlay={select}
                   >
                    {children}
                   </OverlayTrigger>
                 )}
              >
                 <div>
                   <Link style={{marginLeft: '23rem'}} className='resetButton' to={this.getLinkTo()} onClick={this.continue} disabled={!this.props.optionSelected}>
                     <Icon name='arrow-right' /> Next
                   </Link>
                 </div>
              </ConditionalWrapper>
              <div className='fill' />
              <Link className='resetButton' to='/' onClick={this.props.resetAssessment}>
                <Icon name='refresh' /> Reset
              </Link>
            </div>
          </Jumbotron>
        </Container>
        </>
      )
  }
}

export default DataDonorsForm;
