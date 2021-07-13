import React, { Component } from 'react';
import { Container, Jumbotron, Card, Row, Col , Button, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import ReactCardFlip from 'react-card-flip';
import {getSteps, addProcessorStep, addIdentifiableStep} from '../utils/Steps.js';
import { select, ConditionalWrapper } from '../utils/Popovers';
import { directlyIdentifiable, indirectlyIdentifiable, anonymous, anonymized, coded } from '../utils/Definitions';

import { INFO_TYPE } from '../constants';

class InfoDescription extends Component{

  constructor() {
    super();
      this.state = {
      isFlipped: false,
      directlySelected: false,
      indirectlySelected: false,
      anonymousSelected: false,
      anonymizedSelected: false,
      codedSelected: false,
      optionSelected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

    saveAndContinue = (isPersonalInfo, isPublicInfo) => {
        this.props.nextStep();
        this.props.handlePublicInfoChange(isPublicInfo);
        this.props.handlePersonalInfoChange(isPersonalInfo);
        this.props.history.push('/assessment/success');
    }

    select = (infoType) => {
        if(infoType === INFO_TYPE.DIRECTLY ) {
          this.setState({
            directlySelected: true,
            indirectlySelected: false,
            anonymousSelected: false,
            anonymizedSelected: false,
            codedSelected: false,
            optionSelected: true,
          });
        }
        else if(infoType === INFO_TYPE.INDIRECTLY){
          this.setState({
            directlySelected: false,
            indirectlySelected: true,
            anonymousSelected: false,
            anonymizedSelected: false,
            codedSelected: false,
            optionSelected: true,
          });
        }
        else if(infoType === INFO_TYPE.ANONYMOUS){
          this.setState({
            directlySelected: false,
            indirectlySelected: false,
            anonymousSelected: true,
            anonymizedSelected: false,
            codedSelected: false,
            optionSelected: true,
           });
        }
        else if(infoType === INFO_TYPE.ANONYMIZED){
          this.setState({
            directlySelected: false,
            indirectlySelected: false,
            anonymousSelected: false,
            anonymizedSelected: true,
            codedSelected: false,
            optionSelected: true,
          });
        }
        else{
          this.setState({
            directlySelected: false,
            indirectlySelected: false,
            anonymousSelected: false,
            anonymizedSelected: false,
            codedSelected: true,
            optionSelected: true,
          });
        }
        this.props.handleInfoTypeChange(infoType);

    }

    continue = () => {
      if(!this.state.optionSelected) this.props.history.push('/assessment/info/description');
      else if(this.state.directlySelected || this.state.indirectlySelected) this.nextStepProcessor(true);
      else if (this.state.anonymousSelected || this.state.anonymizedSelected)  this.saveAndContinue(false, false);
      else this.nextStepIdentifiable(); //coded
    }

    nextStepProcessor = (identifiable) => {
      const { locations } = this.props;

      this.props.handleIdentifiableInfoChange(identifiable);
      this.props.handlePersonalInfoChange(true);
      this.props.nextStep();

      if(locations.includes('Canada')){
        addProcessorStep();
        this.props.history.push('/assessment/info/processor');
      }
      else{
        this.props.history.push('/assessment/success');
      }
    }

    nextStepIdentifiable = () => {
      const { locations } = this.props;

      this.props.nextStep();

      if(locations.includes('Canada') || locations.includes('United States')){
        addIdentifiableStep();
        this.props.history.push('/assessment/info/identifiable');
      }
      else{
        this.props.handlePersonalInfoChange(true);
        this.props.handleIdentifiableInfoChange(true);
        this.props.history.push('/assessment/success');
      }
    }

    render(){
      const {step, assessment} = this.props;
      const Steps = getSteps(step, assessment.userType);
      return(
        <>
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
              <div>
                <h1 style={{paddingBottom: '2%'}}> How would you describe the information? </h1>
                <Row className='summaryInfo'>
                  <Col lg={4}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOption'>
                     <Card  border={this.state.directlySelected ? 'primary' : ''} className={this.state.directlySelected ? ' selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Directly Identifiable </Card.Title>

                       <Card.Img style={{marginBottom: '1rem'}}  src={require('./../media/datapeople/1-person-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButton" onClick={() => this.select(INFO_TYPE.DIRECTLY)}> Select </Button>
                    </Card.Body>
                    </Card>
                     </div>
                     <div className='cardOption'>
                     <Card border={this.state.directlySelected ? 'primary' : ''}  className={this.state.directlySelected ? 'selectedCard ' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} > Directly Identifiable </Card.Title>
                        <Card.Text>
                          {directlyIdentifiable}
                        </Card.Text>
                        <Button variant="success"  className="selectCardButton" onClick={() => this.select(INFO_TYPE.DIRECTLY)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                   </ReactCardFlip>
                  </Col>
                  <Col lg={4}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOption'>
                     <Card  border={this.state.indirectlySelected ? 'primary ' : ''}  className={this.state.indirectlySelected ? 'selectedCard ' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Indirectly Identifiable </Card.Title>
                       <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/datapeople/2-person-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButton" onClick={() => this.select(INFO_TYPE.INDIRECTLY)}> Select </Button>
                    </Card.Body>
                    </Card>
                     </div>
                     <div className="cardOption">
                     <Card border={this.state.indirectlySelected ? 'primary' : ''} className={this.state.indirectlySelected ? 'selectedCard' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} > Indirectly Identifiable </Card.Title>
                        <Card.Text>
                          {indirectlyIdentifiable}
                        </Card.Text>
                        <Button variant="success" className="selectCardButton" onClick={() => this.select(INFO_TYPE.INDIRECTLY)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                   </ReactCardFlip>
                  </Col>
                  <Col lg={4}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOption'>
                     <Card border={this.state.codedSelected ? 'primary' : ''} className={this.state.codedSelected ? 'selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Coded </Card.Title>
                       <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/datapeople/5-person-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButton" onClick={() => this.select(INFO_TYPE.CODED)}> Select </Button>
                    </Card.Body>
                    </Card>
                     </div>
                     <div className="cardOption">
                     <Card border={this.state.codedSelected ? 'primary' : ''} className={this.state.codedSelected ? 'selectedCard' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} > Coded </Card.Title>
                        <Card.Text>
                          {coded}
                        </Card.Text>
                        <Button variant="success"  className="selectCardButton" onClick={() => this.select(INFO_TYPE.CODED)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                   </ReactCardFlip>
                  </Col>
                  <Col lg={4} style={{marginTop: '2rem', marginLeft:'10rem'}}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOption'>
                     <Card border={this.state.anonymizedSelected ? 'primary' : ''} className={this.state.anonymizedSelected ? 'selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Anonymized </Card.Title>
                       <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/datapeople/3-person-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButton" onClick={() => this.select(INFO_TYPE.ANONYMIZED)}> Select </Button>
                    </Card.Body>
                    </Card>
                     </div>
                     <div className="cardOption">
                     <Card border={this.state.anonymizedSelected ? 'primary' : ''} className={this.state.anonymizedSelected ? 'selectedCard' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} > Anonymized </Card.Title>
                        <Card.Text>
                          {anonymized}
                        </Card.Text>
                        <Button variant="success" className="selectCardButton" onClick={() => this.select(INFO_TYPE.ANONYMIZED)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                   </ReactCardFlip>
                  </Col>
                  <Col style={{marginTop: '2rem'}} lg={4}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOption'>
                     <Card border={this.state.anonymousSelected ? 'primary' : ''} className={this.state.anonymousSelected ? 'selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Anonymous </Card.Title>
                       <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/datapeople/6-person-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButton" onClick={() => this.select(INFO_TYPE.ANONYMOUS)}> Select </Button>
                    </Card.Body>
                    </Card>
                     </div>
                     <div className="cardOption">
                     <Card border={this.state.anonymousSelected ? 'primary' : ''} className={this.state.anonymousSelected ? 'selectedCard' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} > Anonymous </Card.Title>
                        <Card.Text>
                          {anonymous}
                        </Card.Text>
                        <Button variant="success" className="selectCardButton" onClick={() => this.select(INFO_TYPE.ANONYMOUS)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                   </ReactCardFlip>
                   <Button variant="secondary" style={{margin: '1rem -6rem', width: '10rem'}} onClick={this.handleClick}> {this.state.isFlipped ? 'Back' : 'More information'} </Button>
                  </Col>
                </Row>
              </div>
              <div style={{marginTop: '2rem'}} className='MainForm__buttons'>
                <Link className='resetButton' to='/assessment/services'  onClick={this.props.prevStep}>
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
                     <Link style={{marginLeft: '23rem'}} className={this.state.optionSelected ? 'resetButtonSelected' :'resetButton'} onClick={this.continue} disabled={!this.props.optionSelected}>
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
        </>
      )
   }
}

export default InfoDescription;
