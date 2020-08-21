import React, { Component } from 'react';
import { ButtonGroup, Button, OverlayTrigger, Alert } from 'react-bootstrap';
import { directly, indirectly, publicInfo } from '../utils/Popovers';

class PersonalInfo extends Component{

  constructor(props) {
   super(props);

   this.state = {
     identifiable: null,
   }
  }

    saveAndContinue = (isPersonalInfo) => {
        this.props.nextStep();
        this.props.handleInfoChange(isPersonalInfo);
    }

    saveIdentifiable = (info) => {
      this.setState({
        identifiable: info
      });
    }

    getIdentifiableForm = () => {
      return (
        <>
          <h4 style={{paddingBottom: '1%'}}>
            Is the information{' '}
            <OverlayTrigger trigger={['hover', 'focus']} placement='top' overlay={directly}>
              <abbr>directly</abbr>
            </OverlayTrigger>{' '}
            or{' '}
            <OverlayTrigger trigger={['hover', 'focus']} placement='top' overlay={indirectly}>
              <abbr>indirectly</abbr>
            </OverlayTrigger>{' '}
            identifiable?
          </h4>
          <ButtonGroup style={{width:'100%'}} size='lg' vertical>
            <Button variant='light' onClick={() => this.saveIdentifiable(true)}>Yes</Button>
            <Button variant='light' onClick={() => this.saveAndContinue(false)}>No</Button>
          </ButtonGroup>
        </>
      );
    }

    getPublicForm = () => {
      return (
        <>
          <h4 style={{paddingBottom: '1%'}}>
            Is the information{' '}
            <OverlayTrigger trigger={['hover', 'focus']} placement='top' overlay={publicInfo}>
              <abbr>public</abbr>
            </OverlayTrigger> ?
          </h4>
          <ButtonGroup style={{width:'100%'}} size='lg' vertical>
            <Button variant='light' onClick={() => this.saveAndContinue(false)}>Yes</Button>
            <Button variant='light' onClick={() => this.saveAndContinue(true)}>No</Button>
          </ButtonGroup>
        </>
      );
    }

    render(){
        const { identifiable } = this.state;

        return (
          <div>
            <h1>Personal information</h1>
            <Alert variant='obligations' style={{paddingBottom: '1%'}}>
              Locations selected: {this.props.locations.join(', ')}
            </Alert>
            {identifiable ?
              this.getPublicForm() :
              this.getIdentifiableForm()
            }
          </div>
        )
    }
}

export default PersonalInfo;
