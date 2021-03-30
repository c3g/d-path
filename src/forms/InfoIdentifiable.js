import React, { Component } from 'react';
import { Container, Row, Col, Card, Jumbotron, Button, OverlayTrigger } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import {getSteps, addInfoPublicStep, removeLastStep} from '../utils/Steps.js';
import { select, ConditionalWrapper, identifiable } from '../utils/Popovers';

class InfoIdentifiable extends Component{

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

  select = (isIdentifiable) => {
    if(isIdentifiable) {
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
    this.props.handleIdentifiableInfoChange(isIdentifiable);
  }

  prevStep = () => {
    removeLastStep();
    this.props.prevStep();
  }

  saveAndSuccess = (isPersonalInfo, isPublicInfo) => {
      this.props.nextStep();
      this.props.handlePublicInfoChange(isPublicInfo);
      this.props.handlePersonalInfoChange(isPersonalInfo);
      this.props.history.push('/assessment/success');
  }

  nextStep = (isIdentifiable) => {
    addInfoPublicStep();
    this.props.nextStep();
    this.props.handleIdentifiableInfoChange(isIdentifiable);
    this.props.history.push('/assessment/info/public');
  }


  continue = () => {
    if(!this.state.optionSelected) return "/assessment/info/identifiable"
    else if(this.state.noSelected) this.saveAndSuccess(false, false);
    else this.nextStep(true);
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
              Personal Information
            </h6>
            <hr />
            <h1 style={{paddingBottom: '1%'}}>
              Is the information{' '}
              <OverlayTrigger trigger={['hover', 'focus']} placement='top' overlay={identifiable}>
                <abbr>identifiable</abbr>
              </OverlayTrigger>{' '}
              ?
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
            <Link className='resetButton' to='/assessment/info/description' onClick={this.prevStep}>
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
                 <Link style={{marginLeft: '23rem'}} className='resetButton' onClick={this.continue} disabled={!this.props.optionSelected}>
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

export default InfoIdentifiable;
