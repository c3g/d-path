import React, { Component } from 'react';
import { Container, Row, Col, Card, Jumbotron, Button, OverlayTrigger} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import {getSteps, removeLastStep} from '../utils/Steps.js';
import { healthInfo, select, ConditionalWrapper } from '../utils/Popovers';

class InfoHealth extends Component{


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

    select = (crossesBorders) => {
      if(crossesBorders) {
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
      this.props.handleCrossesBordersChange(crossesBorders);
    }

    prevStep = () => {
      removeLastStep();
      this.props.prevStep();
    }

    saveIsHealthInformation = (isHealthInfo) => {
      const { province } = this.props.assessment;

      this.props.handleHealthInfoChange(isHealthInfo);

      this.setProcessorLaws(isHealthInfo, province);
      this.props.nextStep();
      this.props.history.push('/assessment/success');
    }

    setProcessorLaws = (isHealthInfo, province) => {
        if(isHealthInfo){
          this.props.handleProcessorChange({
            body: 'Private Organization & Commercial',
            laws: province.healthLaw,
            provincial: true
          })
        }
        else{
          this.props.handleProcessorChange({
            body: 'Private Organization & Commercial',
            laws: ['PIPEDA'], //**
            provincial: true
          })
        }
    }

    continue = () => {
      if(!this.state.optionSelected) return "/assessment/info/health"
      else this.saveIsHealthInformation(this.state.yesSelected);
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
              <h2 style={{paddingBottom: '2%'}}> Is the information processed {' '}
                <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={healthInfo}>
                  <abbr> Personal Health Information </abbr>
                </OverlayTrigger> ?
              </h2>
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
              <Link className='resetButton' to='/assessment/info/border' onClick={this.prevStep}>
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

export default InfoHealth;
