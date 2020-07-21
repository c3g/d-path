import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UserInfo extends Component{

  constructor(props) {
   super(props);

   this.state = {
     processor:null,
     recipient: null,
     donor: null
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
        this.props.handleUserChange(value);
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

    initializePopovers = () => {
      const processor = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Data Processor</Popover.Title>
          <Popover.Content>
            Individual, entity or organization that either personally or through
            a project collects, records, organizes, structures, stores, adapts
            or alters, retrieves, consults, uses, discloses, transmits,
            disseminates or otherwise makes available, aligns, combines,
            restricts, erases or destroys data.
          </Popover.Content>
        </Popover>);

        const recipient = (
          <Popover id="popover-basic">
            <Popover.Title as="h3">Data Recipient</Popover.Title>
            <Popover.Content>
              Any person to whom the data is disclosed in accordance with a data access
              agreement either open, controlled or registered.
              These are usually researchers, research centres or companies who
              will use the data for further research.
            </Popover.Content>
          </Popover>);

          const donor = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Data Donor</Popover.Title>
              <Popover.Content>
                Refers to the individual whom the data is about.
              </Popover.Content>
            </Popover>);

      this.setState({
        processor: processor,
        recipient: recipient,
        donor: donor
      });
    }

    render(){
        const { values } = this.props;
        const { processor, recipient, donor } = this.state;
        return(
          <div>
            <h1 style={{paddingBottom: '2%'}}> What type of user are you? </h1>
            <ButtonGroup style={{width:'100%'}} size="lg" vertical>
              <OverlayTrigger trigger="hover" placement="bottom" overlay={processor}>
                   <Button variant="light" onClick={(e) => this.saveAndContinue(e, this.createUser('processor'))}>Are you a processor of data?</Button>
               </OverlayTrigger>
               <OverlayTrigger trigger="hover" placement="bottom" overlay={recipient}>
                  <Button variant="light" onClick={(e) => this.saveAndContinue(e, this.createUser('recipient'))}>Are you a data recipient?</Button>
               </OverlayTrigger>
              <OverlayTrigger trigger="hover" placement="bottom" overlay={donor}>
                <Button variant="light" onClick={(e) => this.saveAndContinue(e, this.createUser('donor'))}>Are you a data donor?</Button>
              </OverlayTrigger>
            </ButtonGroup>
            <div style={{paddingTop: '3%'}}>
              <Link to="/">
                <Button variant="danger"> Restart  </Button>
              </Link>
            </div>
          </div>
        )
    }
}

export default UserInfo;
