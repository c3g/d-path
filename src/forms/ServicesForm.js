import React, { Component } from 'react';
import { Container, Row, Col, Card, Jumbotron, Button, OverlayTrigger} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import ReactCardFlip from 'react-card-flip';
import { linkEU  } from '../utils/Link';
import {getSteps, removeLastStep} from '../utils/Steps.js';
import { LOCATION } from '../constants';
import { select,  ConditionalWrapper } from '../utils/Popovers';

class ServicesForm extends Component{

    constructor() {
      super();
        this.state = {
        isFlipped: false,
        EUSelected: false,
        nonEUSelected:false,
        noSelected: false,
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
              noSelected: false,
              optionSelected: true
             });
        }
        else if(location === LOCATION.NON_EU){
            this.setState({
              EUSelected: false,
              nonEUSelected: true,
              noSelected: false,
              optionSelected: true
             });
        }
        else{
            this.setState({
              EUSelected: false,
              nonEUSelected: false,
              noSelected: true,
              optionSelected: true
             });
        }
      }

    saveServicesOffered = () => {
      //trigger warning if answer is europe
      if(this.state.EUSelected) this.props.handleGDPRWarning(true);
      else this.props.handleGDPRWarning(false);

      //save answer
      if(this.state.noSelected) this.props.handleServicesOfferedChange('No');
      else if(this.state.EUSelected) this.props.handleServicesOfferedChange(LOCATION.EU);
      else  this.props.handleServicesOfferedChange(LOCATION.NON_EU);

      console.log(this.props.assessment);
      this.props.nextStep();
    }

    getLinkTo = () => {
      if(!this.state.optionSelected) return "/assessment/services"
      else return "/assessment/info/description"
    }

    prevStep = () => {
      removeLastStep();
      this.props.prevStep();
    }

      render(){
        const {step, assessment} = this.props;
        const Steps = getSteps(step, assessment.userType);
        return(
          <Container className='MainForm'>
            <Jumbotron className='MainForm__content'>
              {Steps}
              <div style={{marginBottom: '1rem'}}>
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
              <h1 style={{paddingBottom: '2%'}}>  If your study returns individual results, where are the individuals located whose results you return? </h1>
              <Row className='summaryInfo'>
                <Col lg={4}>
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
                           It refers to the country members of the European Union and the European Economic Area. The full list of countries can be found {linkEU}
                        </Card.Text>
                        <Button variant="success" className="selectCardButton" onClick={() => this.select(LOCATION.EU)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                  </ReactCardFlip>
                  <Button variant="secondary" style={{margin: '1rem 5rem', width: '10rem'}} onClick={this.handleClick}> {this.state.isFlipped ? 'Back' : 'More information'} </Button>
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
                     }}> Rest of the World </Card.Title>
                     <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/maps/4-map-200x200.png')} rounded />
                  <Button variant="success" className="selectCardButton" onClick={() => this.select(LOCATION.NON_EU)}> Select </Button>
                  </Card.Body>
                  </Card>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className='cardOption'>
                  <Card border={this.state.noSelected ? 'primary' : ''} className={this.state.noSelected ? 'selectedCard' : ''}>
                  <Card.Body>
                  <Card.Title style={{
                    margingLeft: '3rem',
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    opacity: 0.4,
                  }}> No, it does not </Card.Title>
                  <Card.Img style={{marginBottom: '1rem'}}  src={require('./../media/yes-no/no-200x200.png')} rounded />
                  <Button variant="success" className="selectCardButton" onClick={() => this.select("No")}> Select </Button>
                  </Card.Body>
                  </Card>
                  </div>
                </Col>
              </Row>
            <div style={{marginTop: '2rem'}} className='MainForm__buttons'>
              <Link className='resetButton' to='/assessment/donors' onClick={this.prevStep}>
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
                   <Link style={{marginLeft: '23rem'}} className={this.state.optionSelected ? 'resetButtonSelected' :'resetButton'} onClick={this.saveServicesOffered} to={this.getLinkTo()} disabled={!this.props.optionSelected}>
                     <Icon name='arrow-right' /> Next
                   </Link>
                 </div>
              </ConditionalWrapper>
              <div className='fill' />
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

export default ServicesForm;
