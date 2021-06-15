import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Container, Jumbotron, OverlayTrigger } from 'react-bootstrap';
import Select from 'react-select';
import Icon from 'react-fontawesome';
import {getSteps} from '../utils/Steps.js';
import countryList from 'react-select-country-list';
import { link  } from '../utils/Link';
import { ConditionalWrapper, select } from '../utils/Popovers';
import ReactCardFlip from 'react-card-flip';

import { LOCATION } from '../constants';

class DataProcessingForm extends Component{

  constructor(props) {
    super(props)

    this.options = countryList().getData()

    this.state = {
      options: this.options,
      isFlipped: false,
      canadaSelected: false,
      USASelected: false,
      EUSelected: false,
      otherSelected: false,
      optionSelected: false,
      value: null,
    }

    this.handleClick = this.handleClick.bind(this);
  }

    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

   changeHandler = value => {
     this.setState({ value });
     this.select(value.label);
   }

    continue = () => {
      if(this.state.optionSelected) this.props.nextStep();
    }

    getLinkTo = () => {
      if(!this.state.optionSelected) return "/assessment/processor"
      else return "/assessment/recipients"
    }

    select = (location) => {
        if(location === LOCATION.CAN) {
            this.setState({
              canadaSelected: true,
              USASelected : false,
              EUSelected: false,
              otherSelected: false,
              optionSelected: true
             });
        }
        else if(location === LOCATION.USA){
            this.setState({
              canadaSelected: false,
              USASelected : true,
              EUSelected: false,
              otherSelected: false,
              optionSelected: true
             });
        }
        else if (location === LOCATION.EU){
            this.setState({
              canadaSelected: false,
              USASelected : false,
              EUSelected: true,
              otherSelected: false,
              optionSelected: true
             });
        }
        else{
          this.setState({
            canadaSelected: false,
            USASelected : false,
            EUSelected: false,
            otherSelected: true,
            optionSelected: true
          });
        }

        this.props.handleLocChange({ type: 'dataProcessed', location: location });

    }


    render(){
      const {step, assessment} = this.props;
      const Steps = getSteps(step, assessment.userType);
      return(
        <>
          <Container className='MainForm'>
            <Jumbotron className='MainForm__content'>
              {Steps}
              <div>
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
                <div>
                  <h1 style={{paddingBottom: '2%'}}> Where is the data stored/processed? </h1>
                  <Row className='summaryInfo'>
                    <Col lg={4}>
                       <div className='cardOption'>
                       <Card  border={this.state.canadaSelected ? 'primary' : ''} className={this.state.canadaSelected ? ' selectedCard' : ''}>
                       <Card.Body>
                         <Card.Title style={{
                           margingLeft: '3rem',
                           fontSize: '1rem',
                           fontWeight: 'normal',
                           textTransform: 'uppercase',
                           letterSpacing: 1,
                           opacity: 0.4,
                         }}> Canada </Card.Title>

                        <Card.Img style={{marginBottom: '1rem'}}  src={require('./../media/maps/1-map-200x200.png')} rounded />
                      <Button variant="success" className="selectCardButton" onClick={() => this.select(LOCATION.CAN)}> Select </Button>
                      </Card.Body>
                      </Card>
                       </div>
                    </Col>
                    <Col lg={4}>
                       <div className='cardOption'>
                       <Card  border={this.state.USASelected ? 'primary ' : ''}  className={this.state.USASelected ? 'selectedCard ' : ''}>
                       <Card.Body>
                         <Card.Title style={{
                           margingLeft: '3rem',
                           fontSize: '1rem',
                           fontWeight: 'normal',
                           textTransform: 'uppercase',
                           letterSpacing: 1,
                           opacity: 0.4,
                         }}> United States </Card.Title>
                         <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/maps/3-map-200x200.png')} rounded />
                      <Button variant="success" className="selectCardButton" onClick={() => this.select(LOCATION.USA)}> Select </Button>
                      </Card.Body>
                      </Card>
                    </div>
                    </Col>
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
                            It refers to the country members of the European Union and the European Economic Area. The full list of countries belonging to the European Union can be found {link}
                          </Card.Text>
                          <Button variant="success" className="selectCardButton" onClick={() => this.select(LOCATION.EU)}> Select </Button>
                        </Card.Body>
                      </Card>
                      </div>
                    </ReactCardFlip>
                    <Button variant="primary" style={{margin: '1rem 5rem', width: '10rem'}} onClick={this.handleClick}> {this.state.isFlipped ? 'Back' : 'More information'} </Button>
                    </Col>
                  </Row>
                </div>
                <h4
                style={{
                  textAlign: 'center',
                  paddingTop: '1em',
                  paddingBottom: '0.5em',
                  fontSize: '1.5em',
                  fontWeight: 'normal',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                  OR
                </h4>
                <div  style={{width: '50%', marginLeft: '25%', marginBottom: '2rem'}}>
                  <Select
                     options={this.state.options}
                     value={this.state.value}
                     onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className='MainForm__buttons'>
                <Link className='resetButton' to='/assessment/organization' onClick={this.props.prevStep}>
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

export default DataProcessingForm;
