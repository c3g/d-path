import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Popover, OverlayTrigger, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PersonalInfo extends Component{

  constructor(props) {
   super(props);

   this.state = {
     directly:null,
     indirectly: null
   }
   // This binding is necessary to make `this` work in the callback
   this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  componentWillMount(){
     this.initializePopovers();
  }

    saveAndContinue = (e, value) => {
        e.preventDefault();
        this.props.nextStep();
        this.props.handleInfoChange(value);
    }

    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    createType = (isPersonalInfo) => {
      return ({
        type : this.props.currentForm,
        location: 'Canada',
        isPerfonalInfo: isPersonalInfo

      })
    }

    initializePopovers = () => {
      const directly = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Directly Identifiable</Popover.Title>
          <Popover.Content>
            Information that <strong>identifies a specific individual </strong>
            using direct identifiers (name, social insurance number, etc.)
          </Popover.Content>
        </Popover>);

        const indirectly = (
          <Popover id="popover-basic">
            <Popover.Title as="h3">Indirectly Identifiable</Popover.Title>
            <Popover.Content>
              Information that <strong>in combination with indirect identifiers</strong>
              (date of birth or place of residence) can be reasonable expected to identify
              a specific human being.
            </Popover.Content>
          </Popover>);

      this.setState({
        directly:directly,
        indirectly: indirectly
      });
    }

    render(){
        const { directly, indirectly } = this.state;
        const { values } = this.props;
        return(
          <div>
            <h1> Is it personal information? </h1>
            <Alert variant='info' style={{paddingBottom: '1%'}}> Locations selected: {this.props.locations.toString()}</Alert>
            <h4 style={{paddingBottom: '1%'}}> Is the information
             <OverlayTrigger trigger="hover" placement="right" overlay={directly}>
                <Alert.Link> Directly </Alert.Link>
              </OverlayTrigger> or
               <OverlayTrigger trigger="hover" placement="right" overlay={indirectly}>
                <Alert.Link> Indirectly </Alert.Link>
               </OverlayTrigger>
              Identifiable? </h4>
            <ButtonGroup style={{width:'100%'}} size="lg" vertical>
              <Button variant="light" onClick={(e) => this.saveAndContinue(e, this.createType(true) )}>Yes</Button>
              <Button variant="light" onClick={(e) => this.saveAndContinue(e, this.createType(false))}>No</Button>
            </ButtonGroup>
            <div style={{paddingTop: '3%'}}>
              <Button variant={'warning'} onClick={(e) => this.back(e)}> Back </Button>
              <Link to="/">
                <Button variant="danger"> Restart  </Button>
              </Link>
            </div>
          </div>
        )
    }
}

export default PersonalInfo;
