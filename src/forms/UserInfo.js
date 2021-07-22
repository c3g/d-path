import React, { Component } from 'react';
import { Container, Jumbotron, Card, Button, Row, Col, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import ReactCardFlip from 'react-card-flip';

import {getSteps} from '../utils/Steps.js';
import { select, ConditionalWrapper, dataProducer } from '../utils/Popovers';
import { dataProcessor, dataDonor} from '../utils/Definitions';
import { USER_TYPE } from '../constants';

class UserInfo extends Component{

    constructor() {
      super();
        this.state = {
        isFlipped: false,
        stewardSelected: false,
        donorSelected: false,
        optionSelected: false,
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }


    select = (userType) => {
        if(userType === USER_TYPE.STEWARD ) {
            this.setState({
              stewardSelected: true,
              donorSelected: false,
              optionSelected: true,
             });
        }
        else if(userType === USER_TYPE.DONOR){
            this.setState({
              stewardSelected: false,
              donorSelected: true,
              optionSelected: true,
             });
        }
        this.props.handleUserChange(userType);

    }

    continue = () => {
      if(this.state.optionSelected) this.props.nextStep();
    }

    getLinkTo = () => {
      if(this.state.stewardSelected) return "organization"
      if(!this.state.optionSelected) return "/assessment/user"
      else return "other-user"
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
                  User Information
                </h6>
                <hr />
                <h1 style={{paddingBottom: '2%'}}> What is your relationship to the data? </h1>
                <Row className='summaryInfo'>
                  <Col lg={6}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOption' style={{marginLeft:'10rem'}}>
                     <Card  border={this.state.stewardSelected ? 'primary' : ''} className={this.state.stewardSelected ? ' selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Data Steward/User </Card.Title>

                       <Card.Img style={{marginBottom: '1rem'}}  src={require('./../media/datapeople/data2-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButton" onClick={() => this.select(USER_TYPE.STEWARD)}> Select </Button>
                    </Card.Body>
                    </Card>
                     </div>
                     <div className='cardOption' style={{marginLeft:'10rem'}}>
                     <Card border={this.state.stewardSelected ? 'primary' : ''}  className={this.state.stewardSelected ? 'selectedCard ' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} >Data Steward/User</Card.Title>
                        <Card.Text>
                          { dataProcessor }
                        </Card.Text>
                        <Button variant="success" className="selectCardButton" onClick={() => this.select(USER_TYPE.STEWARD)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                   </ReactCardFlip>
                  </Col>
                  <Col lg={6}>
                    <ReactCardFlip onClick={this.handleOnClick} isFlipped={this.state.isFlipped} >
                     <div className='cardOption'>
                     <Card border={this.state.donorSelected ? 'primary' : ''} className={this.state.donorSelected ? 'selectedCard' : ''}>
                     <Card.Body>
                       <Card.Title style={{
                         margingLeft: '3rem',
                         fontSize: '1rem',
                         fontWeight: 'normal',
                         textTransform: 'uppercase',
                         letterSpacing: 1,
                         opacity: 0.4,
                       }}> Data Donor </Card.Title>
                       <Card.Img style={{marginBottom: '1rem'}} src={require('./../media/datapeople/data1-200x200.png')} rounded />
                    <Button variant="success" className="selectCardButton" onClick={() => this.select(USER_TYPE.DONOR)}> Select </Button>
                    </Card.Body>
                    </Card>
                     </div>
                     <div className="cardOption">
                     <Card border={this.state.donorSelected ? 'primary' : ''} className={this.state.donorSelected ? 'selectedCard' : ''}>
                      <Card.Body>
                        <Card.Title style={{
                          marginBottom: '1rem',
                          marginTop: '1rem',
                          fontSize: '1em',
                          fontWeight: 'normal',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          opacity: 0.4,
                        }} > Data Donor </Card.Title>
                        <Card.Text>
                          {dataDonor}
                          <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={dataProducer}>
                            <abbr> Data producer   </abbr>
                          </OverlayTrigger>
                        </Card.Text>
                        <Button variant="success" className="selectCardButton" onClick={() => this.select(USER_TYPE.DONOR)}> Select </Button>
                      </Card.Body>
                    </Card>
                    </div>
                   </ReactCardFlip>
                  </Col>
                  <Button variant="secondary" style={{margin: '1rem 1rem 0rem 25rem', width: '10rem'}} onClick={this.handleClick}> {this.state.isFlipped ? 'Back' : 'More information'} </Button>
                </Row>
              </div>
              <div className='MainForm__buttons'>
                <Link className='resetButton' to='/' onClick={this.props.resetAssessment}>
                  <Icon name='refresh' /> Reset
                </Link>
                <div className='fill' />
                <Link className='resetButton' to='/' >
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
                  <Link style={{marginLeft: '1rem'}} className={this.state.optionSelected ? 'resetButtonSelected' :'resetButton'} to={this.getLinkTo()} onClick={this.continue} disabled={!this.props.optionSelected}>
                    <Icon name='arrow-right' /> Next
                  </Link>
                </ConditionalWrapper>
              </div>
            </Jumbotron>
          </Container>
          </>
        )
    }
}

export default UserInfo;
