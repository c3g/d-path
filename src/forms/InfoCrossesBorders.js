import React, { Component } from 'react';
import { Container, Row, Col, Card, OverlayTrigger, Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import {getSteps, addHealthStep, removeLastStep} from '../utils/Steps.js';
import { select, ConditionalWrapper } from '../utils/Popovers';
import { PROVINCES } from '../constants';

class InfoCrossesBorders extends Component{

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

  saveIsCrossingBorders = (isCrossingBorders) => {
    const { province } = this.props.assessment;

    this.props.handleCrossesBordersChange(isCrossingBorders);

    if(isCrossingBorders){
      this.props.handleProcessorChange({
        body: 'Private Organization & Commercial',
        laws: ['PIPEDA'],
        provincial: true
      });
      //no need to continue
      this.props.nextStep();
      this.props.history.push('/assessment/success');
    }
    else{
      //change the law to the specific private law if province is quebec before going to the next step
      if(province === PROVINCES.QC){
        this.props.handleProcessorChange({
          body: 'Private Organization & Commercial',
          laws: province.privateLaw,
          provincial: true
        });
      }

      if(this.askHealthInfo(province)){
        addHealthStep();
        this.props.nextStep();
        this.props.history.push('/assessment/info/health');
      }else{
        this.props.nextStep();
        this.props.history.push('/assessment/success');
      }
    }
  }

  askHealthInfo = (province) => {
    if(province === PROVINCES.ON || province === PROVINCES.NB || province === PROVINCES.NS || province === PROVINCES.NL){
        return true;
    }
    else return false;
  }


  continue = () => {
    if(!this.state.optionSelected) return "/assessment/info/border"
    else this.saveIsCrossingBorders(this.state.yesSelected);
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
            <h1 style={{paddingBottom: '2%'}}> Is the processing of the information crossing provincial or national borders? </h1>
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
            </div>
            <div className='MainForm__buttons'>
                <Link className='resetButton' to='/' onClick={this.props.resetAssessment}>
                  <Icon name='refresh' /> Reset
                </Link>
                <div className='fill' />
                <Link className='resetButton' to='/assessment/info/province' onClick={this.prevStep}>
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
                <Link style={{marginLeft: '1rem'}} className={this.state.optionSelected ? 'resetButtonSelected' :'resetButton'} onClick={this.continue} disabled={!this.props.optionSelected}>
                  <Icon name='arrow-right' /> Next
                </Link>
                </ConditionalWrapper>
          </div>
        </Jumbotron>
      </Container>
    )
  }
}

export default InfoCrossesBorders;
