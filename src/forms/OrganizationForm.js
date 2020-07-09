import React, { Component } from 'react';
import { Form, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class OrganizationForm extends Component{

  constructor(props) {
   super(props);

  }

    saveLocation = (e, value) => {
        e.preventDefault();
        this.props.nextStep();
        this.props.handleLocChange(value);
    }

    createType = (location) => {
      return ({
        type : 'organization',
        location: location,
        isPerfonalInfo: false

      })
    }

    render(){
        const { values } = this.props;
        return(
          <div>
            <h1 style={{paddingBottom: '2%'}}> Where is the project/organization established?</h1>
            <ButtonGroup style={{width:'100%'}} size="lg" vertical>
              <Button variant="light" onClick={(e) => this.saveLocation(e, this.createType('Canada') )}>Canada</Button>
              <Button variant="light" onClick={(e) => this.saveLocation(e, this.createType('Europe'))}>Europe</Button>
              <Button variant="light" onClick={(e) => this.saveLocation(e, this.createType('United States'))}>United States</Button>
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

export default OrganizationForm;
