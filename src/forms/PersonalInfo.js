import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Popover, OverlayTrigger, Alert } from 'react-bootstrap';
import { directly, indirectly, publicInfo } from '../utils/Popovers';
import { Link } from 'react-router-dom';

class PersonalInfo extends Component{

  constructor(props) {
   super(props);

   this.state = {
     identifiable: null,
   }
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

    render(){
        const { identifiable } = this.state;
        const { values } = this.props;
        return (identifiable) ? this.getPublicForm() : this.getIdentifiableForm();
    }
}

export default PersonalInfo;
