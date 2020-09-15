import React, { Component } from 'react';
import { ButtonGroup, Button, OverlayTrigger } from 'react-bootstrap';
import { commercialActivity, mush, fwub, healthcare } from '../utils/Popovers';

import { PROCESSOR, PROVINCES } from '../constants';

class JurisdictionCanada extends Component{

  constructor(props) {
   super(props);

   this.state = {
     processor: null,
     province: null
   }
  }

  saveAndContinue = () => {
    this.props.nextStep();
  }

  saveProcessor = (processor) => {
    this.setState({
      processor: processor
    });
    this.props.handleProcessorChange(processor);
  }

  saveProvince = (province) => {
    this.setState({
      province: province
    });
    this.props.handleProvinceChange(province);
    this.props.nextStep();
  }

  getProcessorOptions = () => {
    return (
      <div>
        <h4>Who processes the personal information?</h4>
        <ButtonGroup style={{width: '60%'}} size="lg" vertical>
          <Button variant='light'onClick={() => this.saveProcessor(PROCESSOR.FED)}>Federal Government Institution</Button>
          <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={commercialActivity}>
            <Button variant='light' onClick={() => this.saveProcessor(PROCESSOR.PRIV_COMM)}>Private Organization in the course of commercial activities</Button>
          </OverlayTrigger>
          <Button variant='light' onClick={() => this.saveProcessor(PROCESSOR.PRIV_NON_COMM)}>Private Organization in the course of non-commercial activities</Button>
          <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={fwub}>
            <Button variant='light' onClick={() => this.saveProcessor(PROCESSOR.FWUB)}>Federally regulated businesses</Button>
          </OverlayTrigger>
          <Button variant='light' onClick={() => this.saveProcessor(PROCESSOR.PROV_GOV)}>Provincial Government Institution</Button>
          <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={mush}>
            <Button variant='light' onClick={() => this.saveProcessor(PROCESSOR.MUSH)}>MUSHs</Button>
          </OverlayTrigger>
          <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={healthcare}>
              <Button variant='light' onClick={() => this.saveProcessor(PROCESSOR.HEALTH)}>Healthcare Professionals</Button>
          </OverlayTrigger>
          <Button variant='light' onClick={() => this.saveProcessor(PROCESSOR.INDIV_NON_COMM)}>Individuals & in the course of non-commercial activities</Button>
        </ButtonGroup>
      </div>
    )
  }

  getProvincesOptions = () => {
    return(
      <div>
        <h4>In which province does the processing take place?</h4>
        <ButtonGroup style={{width: '100%'}} size="lg" vertical>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.ALB)}>Alberta</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.BC)}>British Columbia</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.MAN)}>Manitoba</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NB)}>New Brunswick</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NL)}>Newfoundland and Labrador</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NT)}>Northwest Territories</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NS)}>Nova Scotia</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NUN)}>Nunavut</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.ONT)}>Ontario</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.PE)}>Prince Edward Island</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.QC)}>Quebec</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.SAS)}>Saskatchewan</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.YUK)}>Yukon</Button>
        </ButtonGroup>
      </div>
    )
  }

  getOptions = () => {
    const {processor} = this.state;
    console.log(processor);
    if (processor && processor.provincial) return this.getProvincesOptions();
    else if (processor) {this.saveAndContinue(); return null;}
    else return this.getProcessorOptions();
  }

    render(){
      return this.getOptions();
    }
}

export default JurisdictionCanada;
