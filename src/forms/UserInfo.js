import React, { Component } from 'react';
import { ButtonGroup, Button, OverlayTrigger } from 'react-bootstrap';
import { processor, recipient, donor } from '../utils/Popovers';

import { USER_TYPE } from '../constants';

class UserInfo extends Component{

    saveAndContinue = (userType) => {
        this.props.nextStep();
        this.props.handleUserChange(userType);
    }

    render(){
        return(
          <div>
            <h1 style={{paddingBottom: '2%'}}> What type of user are you? </h1>
            <ButtonGroup className='userButtons' style={{width: '60%'}} size='lg' vertical>
              <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={processor}>
                <Button variant='light' className='text-left' onClick={() => this.saveAndContinue(USER_TYPE.PROCESSOR)}>Processor of data</Button>
               </OverlayTrigger>
               <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={recipient}>
                <Button variant='light' className='text-left' onClick={() => this.saveAndContinue(USER_TYPE.RECIPIENT)}>Data recipient</Button>
               </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={donor}>
                <Button variant='light' className='text-left' onClick={() => this.saveAndContinue(USER_TYPE.DONOR)}>Data donor</Button>
              </OverlayTrigger>
            </ButtonGroup>
          </div>
        )
    }
}

export default UserInfo;
