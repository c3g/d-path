import React, { Component } from 'react';
import { Container, Jumbotron, Card, Col, Row, Button, OverlayTrigger } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import ReactCardFlip from 'react-card-flip';
import { select, ConditionalWrapper} from '../utils/Popovers';
import { federalGovernmentInstitution, privateCommercial, provincial, mush, fwub, healthcare, privateNonCommercial} from '../utils/Definitions';
import {getSteps, addProvincialStep, removeLastStep} from '../utils/Steps.js';
import { PROCESSOR, INFO_TYPE } from '../constants';

class InfoProcessor extends Component{

  constructor() {
    super();
      this.state = {
      isFlipped: false,
      processor: null,
      federalSelected: false,
      commercialSelected: false,
      fwubSelected: false,
      provincialSelected: false,
      MUSHselected: false,
      healthcareSelected: false,
      nonCommercialSelected: false,
      optionSelected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

    select = (processor) => {
        this.setState({ processor: processor});
        if(processor === PROCESSOR.FED ) {
          this.setState({
            federalSelected: true,
            commercialSelected: false,
            fwubSelected: false,
            provincialSelected: false,
            MUSHselected: false,
            healthcareSelected: false,
            nonCommercialSelected: false,
            optionSelected: true,
          });
        }
        else if(processor === PROCESSOR.PRIV_COMM){
          this.setState({
            federalSelected: false,
            commercialSelected: true,
            fwubSelected: false,
            provincialSelected: false,
            MUSHselected: false,
            healthcareSelected: false,
            nonCommercialSelected: false,
            optionSelected: true,
          });
        }
        else if(processor === PROCESSOR.FWUB){
          this.setState({
            federalSelected: false,
            commercialSelected: false,
            fwubSelected: true,
            provincialSelected: false,
            MUSHselected: false,
            healthcareSelected: false,
            nonCommercialSelected: false,
            optionSelected: true,
           });
        }
        else if(processor === PROCESSOR.PROV_GOV){
          this.setState({
            federalSelected: false,
            commercialSelected: false,
            fwubSelected: false,
            provincialSelected: true,
            MUSHselected: false,
            healthcareSelected: false,
            nonCommercialSelected: false,
            optionSelected: true,
          });
        }
        else if(processor === PROCESSOR.MUSH){
          this.setState({
            federalSelected: false,
            commercialSelected: false,
            fwubSelected: false,
            provincialSelected: false,
            MUSHselected: true,
            healthcareSelected: false,
            nonCommercialSelected: false,
            optionSelected: true,
          });
        }
        else if(processor === PROCESSOR.HEALTH){
          this.setState({
            federalSelected: false,
            commercialSelected: false,
            fwubSelected: false,
            provincialSelected: false,
            MUSHselected: false,
            healthcareSelected: true,
            nonCommercialSelected: false,
            optionSelected: true,
          });
        }
        else{
          this.setState({
            federalSelected: false,
            commercialSelected: false,
            fwubSelected: false,
            provincialSelected: false,
            MUSHselected: false,
            healthcareSelected: false,
            nonCommercialSelected: true,
            optionSelected: true,
          });
        }
        this.props.handleProcessorChange(processor);

    }

    continue = () => {
      if(!this.state.optionSelected) this.props.history.push('/assessment/info/processor');
      else this.nextStep(this.state.processor);
    }

    nextStep = (processor) => {
      this.props.handleProcessorChange(processor);
      console.log(processor);
      if(processor.provincial) {
        addProvincialStep();
        this.props.nextStep();
        this.props.history.push('/assessment/info/province');
      }
      else{
        this.props.nextStep();
        this.props.history.push('/assessment/success');
      }
    }

    getLinkTo = () => {
      console.log(this.props);
      if(!this.props.locations.includes('Europe') && this.props.assessment.infoType === INFO_TYPE.CODED) return '/assessment/info/identifiable';
      else return '/assessment/info/description';
    }

    prevStep = () => {
      removeLastStep();
      this.props.prevStep();
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
                <h1 style={{paddingBottom: '2%'}}> Who processes the information? </h1>
                <Row className='summaryInfo'>
                  <Col lg={3}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOptionProcessor'>
                     <Card  border={this.state.federalSelected ? 'primary' : ''} className={this.state.federalSelected ? ' selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Federal Government Institution </Card.Title>

                       <Card.Img style={{marginBottom: '1rem'}}  src={require('./../media/institutions/1-institution-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.FED)}> Select </Button>
                    </Card.Body>
                    </Card>
                   </div>
                   <div className="cardOptionProcessor">
                   <Card border={this.state.federalSelected ? 'primary' : ''} className={this.state.federalSelected ? 'selectedCard' : ''}>
                    <Card.Body>
                      <Card.Title style={{
                        marginBottom: '1rem',
                        marginTop: '1rem',
                        fontSize: '1em',
                        fontWeight: 'normal',
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        opacity: 0.4,
                      }} > Federal Government Institution </Card.Title>
                      <Card.Text  style={{fontSize:'0.9rem'}}>
                        {federalGovernmentInstitution}
                      </Card.Text>
                      <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.FED)}> Select </Button>
                    </Card.Body>
                  </Card>
                  </div>
                   </ReactCardFlip>
                  </Col>
                  <Col lg={3}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOptionProcessor'>
                     <Card  border={this.state.commercialSelected ? 'primary ' : ''}  className={this.state.commercialSelected ? 'selectedCard ' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '0.8rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Private Individuals and Organizations in the course of Commercial activities </Card.Title>
                       <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/institutions/2-institution-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.PRIV_COMM)}> Select </Button>
                    </Card.Body>
                    </Card>
                     </div>
                     <div className="cardOptionProcessor">
                     <Card border={this.state.commercialSelected ? 'primary' : ''} className={this.state.commercialSelected ? 'selectedCard' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} > Private Individuals and Organizations in the course of Commercial activities </Card.Title>
                        <Card.Text  style={{fontSize:'0.9rem'}}>
                          {privateCommercial}
                        </Card.Text>
                        <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.PRIV_COMM)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                   </ReactCardFlip>
                  </Col>
                  <Col lg={3}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOptionProcessor'>
                     <Card border={this.state.fwubSelected ? 'primary' : ''} className={this.state.fwubSelected ? 'selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Federally regulated businesses </Card.Title>
                       <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/institutions/3-institution-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.FWUB)}> Select </Button>
                    </Card.Body>
                    </Card>
                     </div>
                     <div className="cardOptionProcessor">
                     <Card border={this.state.fwubSelected ? 'primary' : ''} className={this.state.fwubSelected ? 'selectedCard' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} > Federally regulated businesses </Card.Title>
                        <Card.Text  style={{fontSize:'0.9rem'}}>
                          {fwub}
                        </Card.Text>
                        <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.FWUB)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                   </ReactCardFlip>
                  </Col>
                  <Col lg={3}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOptionProcessor'>
                       <Card border={this.state.provincialSelected ? 'primary' : ''} className={this.state.provincialSelected ? 'selectedCard' : ''}>
                       <Card.Body>
                         <Card.Title style={{
                           margingLeft: '3rem',
                           fontSize: '1rem',
                           fontWeight: 'normal',
                           textTransform: 'uppercase',
                           letterSpacing: 1,
                           opacity: 0.4,
                         }}> Provincial Government Institution </Card.Title>
                         <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/institutions/4-institution-200x200.png')} rounded />
                      <Button variant="success"  className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.PROV_GOV)}> Select </Button>
                      </Card.Body>
                      </Card>
                     </div>
                     <div className='cardOptionProcessor'>
                       <Card border={this.state.provincialSelected ? 'primary' : ''} className={this.state.provincialSelected ? 'selectedCard' : ''}>
                       <Card.Body>
                         <Card.Title style={{
                           margingLeft: '3rem',
                           fontSize: '1rem',
                           fontWeight: 'normal',
                           textTransform: 'uppercase',
                           letterSpacing: 1,
                           opacity: 0.4,
                         }}> Provincial Government Institution </Card.Title>
                         <Card.Text  style={{fontSize:'0.9rem'}}>
                           {provincial}
                         </Card.Text>
                      <Button variant="success"  className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.PROV_GOV)}> Select </Button>
                      </Card.Body>
                      </Card>
                     </div>
                    </ReactCardFlip>
                  </Col>
                  <Col style={{marginTop: '2rem', marginLeft:'7.8rem'}} lg={3}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOptionProcessor'>
                     <Card border={this.state.MUSHselected ? 'primary' : ''} className={this.state.MUSHselected ? 'selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> MUSH </Card.Title>
                       <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/institutions/5-institution-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.MUSH)}> Select </Button>
                    </Card.Body>
                    </Card>
                     </div>
                     <div className="cardOptionProcessor">
                     <Card border={this.state.MUSHselected ? 'primary' : ''} className={this.state.MUSHselected ? 'selectedCard' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} > MUSH </Card.Title>
                        <Card.Text style={{fontSize:'0.9rem'}}>
                          {mush}
                        </Card.Text>
                        <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.MUSH)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                   </ReactCardFlip>
                  </Col>
                  <Col style={{marginTop: '2rem'}} lg={3}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOptionProcessor'>
                     <Card border={this.state.healthcareSelected ? 'primary' : ''} className={this.state.healthcareSelected ? 'selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Healthcare Professionals </Card.Title>
                       <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/institutions/6-institution-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.HEALTH)}> Select </Button>
                    </Card.Body>
                    </Card>
                     </div>
                     <div className="cardOptionProcessor">
                     <Card border={this.state.healthcareSelected ? 'primary' : ''} className={this.state.healthcareSelected ? 'selectedCard' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} > Healthcare Professionals </Card.Title>
                        <Card.Text style={{fontSize:'0.9rem'}}>
                          {healthcare}
                        </Card.Text>
                        <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.HEALTH)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                   </ReactCardFlip>
                   <Button variant="secondary" style={{margin: '1rem 3rem', width: '10rem'}} onClick={this.handleClick}> {this.state.isFlipped ? 'Back' : 'More information'} </Button>
                  </Col>
                  <Col style={{marginTop: '2rem'}} lg={3}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOptionProcessor'>
                     <Card border={this.state.nonCommercialSelected ? 'primary' : ''} className={this.state.nonCommercialSelected ? 'selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '0.8rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Individuals and Organizations in the course of Non-Commercial activities </Card.Title>
                       <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/institutions/7-institution-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.NON_COMM)}> Select </Button>
                    </Card.Body>
                    </Card>
                    </div>
                    <div className='cardOptionProcessor'>
                    <Card border={this.state.nonCommercialSelected ? 'primary' : ''} className={this.state.nonCommercialSelected ? 'selectedCard' : ''}>
                    <Card.Body>
                      <Card.Title style={{
                        margingLeft: '3rem',
                        fontSize: '0.8rem',
                        fontWeight: 'normal',
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        opacity: 0.4,
                      }}> Individuals and Organizations in the course of Non-Commercial activities </Card.Title>
                      <Card.Text style={{fontSize:'0.9rem'}}>
                        {privateNonCommercial}
                      </Card.Text>
                   <Button variant="success" className="selectCardButtonProcessor" onClick={() => this.select(PROCESSOR.NON_COMM)}> Select </Button>
                   </Card.Body>
                   </Card>
                   </div>
                    </ReactCardFlip>
                  </Col>
                </Row>
              </div>
              <div style={{marginTop: '2rem'}} className='MainForm__buttons'>
                <Link className='resetButton' to={this.getLinkTo()}  onClick={this.prevStep}>
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

export default InfoProcessor;
