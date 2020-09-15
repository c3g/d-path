import React, { Component } from 'react';
import { ButtonGroup, Button, OverlayTrigger, Alert } from 'react-bootstrap';
import { directly, indirectly, publicInfo } from '../utils/Popovers';

import JurisdictionCanada from './JurisdictionCanada';

class PersonalInfo extends Component{

  constructor(props) {
   super(props);

   this.state = {
     identifiable: null,
     personal: null,
     jurisdictionCanada: this.props.locations.includes('Canada') ? true : false
   }
  }

    saveAndContinue = (isPersonalInfo) => {
        this.props.nextStep();
        this.props.handleInfoChange(isPersonalInfo);
    }

    saveIdentifiable = (identifiable) => {
      this.setState({
        identifiable: identifiable
      });
    }

    savePersonal = (isPersonalInfo) => {
      this.setState({
        personal: isPersonalInfo
      });
      if(!this.state.jurisdictionCanada) this.saveAndContinue(isPersonalInfo);
      else this.props.handleInfoChange(isPersonalInfo);
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
            <Button variant='light' onClick={() => this.savePersonal(true)}>No</Button>
          </ButtonGroup>
        </>
      );
    }

    getCurrentForm = () => {
      const { identifiable, personal, jurisdictionCanada } = this.state;
      console.log(this.state);
      if(identifiable && !personal) return this.getPublicForm()
      else if(identifiable && personal && jurisdictionCanada)
        return <JurisdictionCanada
                  nextStep={this.props.nextStep}
                  handleProcessorChange={this.props.handleProcessorChange}
                  handleProvinceChange={this.props.handleProvinceChange}
                />
      else return this.getIdentifiableForm()
    }

    render(){
        return (
          <div>
            <h1>Personal information</h1>
            <Alert variant='obligations' style={{paddingBottom: '1%'}}>
              Locations selected: {this.props.locations.join(', ')}
            </Alert>
            {  this.getCurrentForm() }
          </div>
        )
    }
}

export default PersonalInfo;
