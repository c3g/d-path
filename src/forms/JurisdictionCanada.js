import React, { Component } from 'react';
import { ButtonGroup, Button, OverlayTrigger } from 'react-bootstrap';
import { commercialActivity, mush, fwub, healthcare, healthInfo } from '../utils/Popovers';

import { PROCESSOR, PROVINCES } from '../constants';

class JurisdictionCanada extends Component{

  constructor(props) {
   super(props);

   this.state = {
     processor: null,
     province: null,
     isHealthInfo: null,
     hasSimilarRegulation: null,
     isCrossingBorders: null,
     askHealthInfo:null
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

    if(this.state.processor !== PROCESSOR.PRIV_COMM){

        //just for these 2 we have to display all laws
        if((this.state.processor === PROCESSOR.MUSH || this.state.processor === PROCESSOR.PROV_GOV)){
          this.props.handleProcessorChange({
            body: 'Private Organization & Not Commercial',
            laws: province.laws,
            provincial: true
          });
        }

        this.props.nextStep();
    }
    else{
      this.setState({
        //only the Private Commercial have similar legislations (have to ask crossing borders)
        hasSimilarRegulation: true,
        askHealthInfo: this.askHealthInfo(province)
      });
    }
  }

  saveIsCrossingBorders = (isCrossingBorders) => {
    const {province, askHealthInfo} = this.state;

    this.setState({
      isCrossingBorders: isCrossingBorders
    });

    this.props.handleCrossesBordersChange(isCrossingBorders);

    if(isCrossingBorders){
      this.props.handleProcessorChange({
        body: 'Private Organization & Not Commercial',
        laws: ['PIPEDA'],
        provincial: true
      });
      //no need to continue
      this.props.nextStep();
    }

    //change the law to the specific private law if province is quebec before going to the next step
    if(province === PROVINCES.QC){
      this.props.handleProcessorChange({
        body: 'Private Organization & Commercial',
        laws: province.privateLaw,
        provincial: true
      })
    }

    if(!askHealthInfo){
      this.props.nextStep();
    }
  }

  saveIsHealthInformation = (isHealthInfo) => {
    const { province } = this.state;
    this.setState({
      isHealthInfo: isHealthInfo
    });

    this.props.handleHealthInfoChange(isHealthInfo);

    this.setProcessorLaws(isHealthInfo, province);
    this.props.nextStep();
    }



  askHealthInfo = (province) => {
    if(province === PROVINCES.ON || province === PROVINCES.NB || province === PROVINCES.NS || province === PROVINCES.NL){
        return true;
    }
    else return false;
  }

  setProcessorLaws = (isHealthInfo, province) => {
      if(isHealthInfo){
        this.props.handleProcessorChange({
          body: 'Private Organization & Commercial',
          laws: province.healthLaw,
          provincial: true
        })
      }
      else{
        this.props.handleProcessorChange({
          body: 'Private Organization & Commercial',
          laws: ['PIPEDA'], //**
          provincial: true
        })
      }
  }

  getProcessorOptions = () => {
    return (
      <div>
        <h4 style={{paddingBottom: '2%'}}> Who processes the personal information?</h4>
        <ButtonGroup style={{width: '60%'}} size="lg" vertical>
          <Button variant='light'onClick={() => this.saveProcessor(PROCESSOR.FED)}>Federal Government Institution</Button>
          <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={commercialActivity}>
            <Button variant='light' onClick={() => this.saveProcessor(PROCESSOR.PRIV_COMM)}>Private Individuals and Organizations in the course of Commercial activities</Button>
          </OverlayTrigger>
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
          <Button variant='light' onClick={() => this.saveProcessor(PROCESSOR.NON_COMM)}>Individuals and Organizations in the course of Non-Commercial activities</Button>
        </ButtonGroup>
      </div>
    )
  }

  getProvincesOptions = () => {
    return(
      <div>
        <h4 style={{paddingBottom: '2%'}} >In which province does the processing take place?</h4>
        <ButtonGroup style={{width: '100%'}} size="lg" vertical>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.ALB)}>Alberta</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.BC)}>British Columbia</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.MAN)}>Manitoba</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NB)}>New Brunswick</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NL)}>Newfoundland and Labrador</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NT)}>Northwest Territories</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NS)}>Nova Scotia</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NUN)}>Nunavut</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.ON)}>Ontario</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.PE)}>Prince Edward Island</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.QC)}>Quebec</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.SAS)}>Saskatchewan</Button>
          <Button variant='light' onClick={() => this.saveProvince(PROVINCES.YUK)}>Yukon</Button>
        </ButtonGroup>
      </div>
    )
  }

  getCrossingBorders = () => {
    return(
      <div>
        <h4 style={{paddingBottom: '2%'}}> Is the processing of the information crossing provincial or national borders? </h4>
        <ButtonGroup style={{width: '100%'}} size="lg" vertical>
          <Button variant='light' onClick={() => this.saveIsCrossingBorders(true)}> Yes </Button>
          <Button variant='light' onClick={() => this.saveIsCrossingBorders(false)}> No </Button>
        </ButtonGroup>
      </div>
    )
  }

  getHealthInformation = () => {
    return(
      <div>
        <h4 style={{paddingBottom: '2%'}}> Is the personal information processed {' '}
          <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={healthInfo}>
            <abbr> Personal Health Information </abbr>
          </OverlayTrigger> ?
        </h4>
        <ButtonGroup style={{width: '60%'}} size="lg" vertical>
          <Button variant='light' onClick={() => this.saveIsHealthInformation(true)}> Yes </Button>
          <Button variant='light' onClick={() => this.saveIsHealthInformation(false)}> No </Button>
        </ButtonGroup>
      </div>
    )
  }

  getOptions = () => {
    const {processor, hasSimilarRegulation, isCrossingBorders, askHealthInfo} = this.state;
    if(processor === PROCESSOR.PRIV_COMM && isCrossingBorders === false && askHealthInfo) { return this.getHealthInformation(); }
    else if (processor === PROCESSOR.PRIV_COMM && hasSimilarRegulation) { return this.getCrossingBorders(); }
    else if (processor && processor.provincial) return this.getProvincesOptions();
    else if (processor) { this.saveAndContinue(); return null; }
    else return this.getProcessorOptions();
  }

    render(){
      return this.getOptions();
    }
}

export default JurisdictionCanada;
