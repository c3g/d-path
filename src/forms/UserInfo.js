import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { processor, recipient, donor } from '../utils/Popovers';

import { USER_TYPE } from '../constants';

class UserInfo extends Component{

  constructor(props) {
   super(props);
  }

    saveAndContinue = (type) => {
        this.props.nextStep();
        this.props.handleUserChange(type);
    }

    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    createUser = (user) => {
      return ({
        type : user,
        known: true,
      });
    }

    render(){
        return(
          <div>
            <h1 style={{paddingBottom: '2%'}}> What type of user are you? </h1>
            <ButtonGroup className='userButtons' style={{width: '60%'}} size='lg' vertical>
              <OverlayTrigger trigger='hover' placement='right' overlay={processor}>
                <Button variant='light' className='text-left' onClick={() => this.saveAndContinue(USER_TYPE.PROCESSOR)}>Processor of data</Button>
               </OverlayTrigger>
               <OverlayTrigger trigger='hover' placement='right' overlay={recipient}>
                <Button variant='light' className='text-left' onClick={() => this.saveAndContinue(USER_TYPE.RECIPIENT)}>Data recipient</Button>
               </OverlayTrigger>
              <OverlayTrigger trigger='hover' placement='right' overlay={donor}>
                <Button variant='light' className='text-left' onClick={() => this.saveAndContinue(USER_TYPE.DONOR)}>Data donor</Button>
              </OverlayTrigger>
            </ButtonGroup>
            <div style={{paddingTop: '3%'}}>
              <Link to='/'>
                <Button variant='danger'> Restart  </Button>
              </Link>
            </div>
          </div>
        )
    }
}

export default UserInfo;
