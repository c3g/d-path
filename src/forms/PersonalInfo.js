import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Popover, OverlayTrigger, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PersonalInfo extends Component{

  constructor(props) {
   super(props);

   this.state = {
     identifiable: null,
     directly:null,
     indirectly: null,
     publicInfo: null
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

    saveIdentifiable = (info) => {
      this.setState({
        identifiable: info
      });
    }

    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    getIdentifiableForm = () => {
      const { directly, indirectly } = this.state;
      return (
        <div>
          <h1> Is it personal information? </h1>
          <Alert variant='info' style={{paddingBottom: '1%'}}> Locations selected: {this.props.locations.toString()}</Alert>
          <h4 style={{paddingBottom: '1%'}}> Is the information
           <OverlayTrigger trigger="hover" placement="top" overlay={directly}>
              <Alert.Link> Directly </Alert.Link>
            </OverlayTrigger> or
             <OverlayTrigger trigger="hover" placement="top" overlay={indirectly}>
              <Alert.Link> Indirectly </Alert.Link>
             </OverlayTrigger>
            Identifiable? </h4>
          <ButtonGroup style={{width:'100%'}} size="lg" vertical>
            <Button variant="light" onClick={(e) => this.saveIdentifiable(true)}>Yes</Button>
            <Button variant="light" onClick={(e) => this.saveAndContinue(e, false) }>No</Button>
          </ButtonGroup>
          <div style={{paddingTop: '3%'}}>
            <Button variant={'warning'} onClick={(e) => this.back(e)}> Back </Button>
            <Link to="/">
              <Button variant="danger"> Restart  </Button>
            </Link>
          </div>
        </div>
      );
    }

    getPublicForm = () => {
      const { publicInfo } = this.state;
      return (
        <div>
          <h1> Is it personal information? </h1>
          <Alert variant='info' style={{paddingBottom: '1%'}}> Locations selected: {this.props.locations.toString()}</Alert>
          <h4 style={{paddingBottom: '1%'}}> Is the information
           <OverlayTrigger trigger="hover" placement="top" overlay={publicInfo}>
           <Alert.Link> Public </Alert.Link>
           </OverlayTrigger> ?
          </h4>
          <ButtonGroup style={{width:'100%'}} size="lg" vertical>
            <Button variant="light" onClick={(e) => this.saveAndContinue(e, false )}>Yes</Button>
            <Button variant="light" onClick={(e) => this.saveAndContinue(e, true )}>No</Button>
          </ButtonGroup>
          <div style={{paddingTop: '3%'}}>
            <Button variant={'warning'} onClick={(e) => this.back(e)}> Back </Button>
            <Link to="/">
              <Button variant="danger"> Restart  </Button>
            </Link>
          </div>
        </div>
      );
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

          const publicInfo = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Public Information</Popover.Title>
              <Popover.Content>
                Personal information that has been legally made public has no reasonable
                expectation of privacy. Public personal information is not protected
                to the same degree as that one that has reasonable expectation of privacy.
              </Popover.Content>
            </Popover>);

      this.setState({
        directly:directly,
        indirectly: indirectly,
        publicInfo: publicInfo
      });
    }

    render(){
        const { identifiable, directly, indirectly } = this.state;
        const { values } = this.props;
        return (identifiable) ? this.getPublicForm() : this.getIdentifiableForm();
    }
}

export default PersonalInfo;
