import React, { Component } from 'react';
import { Container, Row, Col, Card, Jumbotron, Button, OverlayTrigger} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import {getSteps, removeLastStep} from '../utils/Steps.js';
import { select, goods,  ConditionalWrapper } from '../utils/Popovers';

class ServicesForm extends Component{

    constructor() {
      super();
        this.state = {
        isFlipped: false,
        yesSelected: false,
        noSelected: false,
        optionSelected: false,
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    select = (beingOffered) => {
      if(beingOffered) {
        this.setState({
          yesSelected: true,
          noSelected: false,
          optionSelected: true
        });
      }
      else{
        this.setState({
          yesSelected: false,
          noSelected: true,
          optionSelected: true
        });
      }
      this.props.handleServicesOfferedChange(beingOffered);
    }

    prevStep = () => {
      removeLastStep();
      this.props.prevStep();
    }

    saveServicesOffered = (beingOffered) => {
      if(beingOffered){
        this.props.handleGDPRWarning(beingOffered);
      }
      this.props.handleServicesOfferedChange(beingOffered);
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
              <h1 style={{paddingBottom: '2%'}}>  Were
                <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={goods}>
                  <abbr> goods and services </abbr>
                </OverlayTrigger>
                 being offered ?
              </h1>
              <Row className='summaryInfo'>
                <Col style={{marginLeft: '10rem'}} lg={4}>
                   <div className='cardOption'>
                     <Card  border={this.state.yesSelected ? 'primary' : ''} className={this.state.yesSelected ? ' selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Yes </Card.Title>

                       <Card.Img style={{marginBottom: '1rem'}}  src={require('./../media/yes-no/yes-200x200.png')} rounded />
                    <Button variant="success" style={{marginLeft: '5rem'}} onClick={() => this.select(true)}> Select </Button>
                    </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col  lg={4}>
                  <div className='cardOption'>
                   <Card  border={this.state.noSelected ? 'primary ' : ''}  className={this.state.noSelected ? 'selectedCard ' : ''}>
                   <Card.Body>
                     <Card.Title style={{
                       margingLeft: '3rem',
                       fontSize: '1rem',
                       fontWeight: 'normal',
                       textTransform: 'uppercase',
                       letterSpacing: 1,
                       opacity: 0.4,
                     }}> No </Card.Title>
                     <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/yes-no/no-200x200.png')} rounded />
                  <Button variant="success" style={{marginLeft: '5rem'}} onClick={() => this.select(false)}> Select </Button>
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
                   <Link style={{marginLeft: '23rem'}} className={this.state.optionSelected ? 'resetButtonSelected' :'resetButton'} onClick={this.props.nextStep} to={this.getLinkTo()} disabled={!this.props.optionSelected}>
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
