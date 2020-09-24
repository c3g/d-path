import React, { Component } from 'react';
import { ButtonGroup, Button, OverlayTrigger, Alert } from 'react-bootstrap';
import { identifiable, directly, indirectly, anonymous, anonymized, coded, publicInfo } from '../utils/Popovers';

import JurisdictionCanada from './JurisdictionCanada';

import { INFO_TYPE } from '../constants';

class PersonalInfo extends Component{

  constructor(props) {
   super(props);

   this.state = {
     identifiable: null,
     personal: null,
     informationType: null,
     jurisdictionCanada: this.props.locations.includes('Canada') ? true : false
   }
  }

    saveAndContinue = (isPersonalInfo) => {
        this.props.nextStep();
        this.props.handlePersonalInfoChange(isPersonalInfo);
    }

    saveInfoType = (infoType) => {
      if(infoType === INFO_TYPE.DIRECTLY || infoType === INFO_TYPE.INDIRECTLY) this.saveIdentifiable(true)
      else if (infoType === INFO_TYPE.ANONYMOUS || infoType === INFO_TYPE.ANONYMIZED)  this.saveAndContinue(false)
      this.setState({
        informationType: infoType
      });
      this.props.handleInfoTypeChange(infoType);
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
      else this.props.handlePersonalInfoChange(isPersonalInfo);
    }

    getInformationForm = () => {
      return(
        <div>
          <h1 style={{paddingBottom: '2%'}}> How would you describe the information? </h1>
          <ButtonGroup className='userButtons' style={{width: '60%'}} size='lg' vertical>
            <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={directly}>
              <Button variant='light' className='text-left' onClick={() => this.saveInfoType(INFO_TYPE.DIRECTLY)}>Directly Identifiable</Button>
             </OverlayTrigger>
             <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={indirectly}>
              <Button variant='light' className='text-left' onClick={() => this.saveInfoType(INFO_TYPE.INDIRECTLY)}>Indirectly Identifiable</Button>
             </OverlayTrigger>
            <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={anonymized}>
              <Button variant='light' className='text-left' onClick={() => this.saveInfoType(INFO_TYPE.ANONYMIZED)}>Anonymized</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={anonymous}>
              <Button variant='light' className='text-left' onClick={() => this.saveInfoType(INFO_TYPE.ANONYMOUS)}>Anonymous</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={coded}>
              <Button variant='light' className='text-left' onClick={() => this.saveInfoType(INFO_TYPE.CODED)}>Coded</Button>
            </OverlayTrigger>
          </ButtonGroup>
        </div>
      )
    }

    getIdentifiableForm = () => {
      return (
        <>
          <h4 style={{paddingBottom: '1%'}}>
            Is the information{' '}
            <OverlayTrigger trigger={['hover', 'focus']} placement='top' overlay={identifiable}>
              <abbr>identifiable</abbr>
            </OverlayTrigger>{' '}
            ?
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
      const { identifiable, personal, jurisdictionCanada, informationType } = this.state;

      //if personal is null it means we haven't asked the user if it is public
      if(identifiable && !personal) return this.getPublicForm()
      //if all information is given and it is Jurisdiction Canada show it
      else if(identifiable && personal && jurisdictionCanada)
        return <JurisdictionCanada
                  nextStep={this.props.nextStep}
                  handleProcessorChange={this.props.handleProcessorChange}
                  handleProvinceChange={this.props.handleProvinceChange}
                />

      else if(informationType === INFO_TYPE.CODED) return this.getIdentifiableForm()
      else return this.getInformationForm()
    }

    render(){
        return (
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
            Personal Info
          </h6>
          <hr />
            <Alert variant='obligations' style={{paddingBottom: '1%'}}>
              Locations selected: {this.props.locations.join(', ')}
            </Alert>
            {  this.getCurrentForm() }
          </div>
        )
    }
}

export default PersonalInfo;
