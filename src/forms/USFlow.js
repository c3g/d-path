import React, { Component } from 'react';
import { Form, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class USFlow extends Component{

  constructor(props) {
   super(props);

   // This binding is necessary to make `this` work in the callback
   this.saveAndContinue = this.saveAndContinue.bind(this);
  }

    saveAndContinue = (e, value) => {
        e.preventDefault();
        this.props.handleInfoChange(value);
    }

    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    createType = (isPersonalInfo) => {
      return ({
        type : this.props.currentForm,
        location: 'United States',
        isPerfonalInfo: isPersonalInfo

      })
    }

    render(){
        const { values } = this.props;
        return(
          <div>
            <h1 style={{paddingBottom: '2%'}}> US - Is it personal information? </h1>
            <h4 style={{paddingBottom: '1%'}}> Is the information Directly or Indirectly Identifiable? </h4>
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

export default USFlow;
