import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row, Container, Jumbotron, Card, OverlayTrigger } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import ReactCardFlip from 'react-card-flip';

import {getSteps} from '../utils/Steps.js';
import { LOCATION } from '../constants';
import { select, behaviour, located, ConditionalWrapper } from '../utils/Popovers';
import { linkEU  } from '../utils/Link';

class DataDonorsForm extends Component{

  constructor() {
    super();
      this.state = {
      isFlipped: false,
      EUSelected: false,
      nonEUSelected: false,
      noSelected:false,
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

      this.props.handleLocChange({ type: 'dataDonors', location: location });

  }

  continue = () => {
    if(this.state.optionSelected) this.props.nextStep();
  }

  getLinkTo = () => {
    if(!this.state.optionSelected) return "/assessment/donors"
    else return "/assessment/services"
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
              <h1 style={{paddingBottom: '2%'}}>  If your study monitors the behaviour of individuals, where are they
                <OverlayTrigger trigger={['hover', 'focus']} placement='top' overlay={located}>
                  <abbr> located  </abbr>
                </OverlayTrigger> when their {' '}
                <OverlayTrigger trigger={['hover', 'focus']} placement='top' overlay={behaviour}>
                  <abbr> behaviour is being monitored  </abbr>
                </OverlayTrigger> ?
              </h1>
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
            </div>
            <div className='MainForm__buttons'>
              <Link className='resetButton' to='/assessment/organization'  onClick={this.props.prevStep}>
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
                   <Link style={{marginLeft: '23rem'}} className={this.state.optionSelected ? 'resetButtonSelected' :'resetButton'} to={this.getLinkTo()} onClick={this.continue} disabled={!this.props.optionSelected}>
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
