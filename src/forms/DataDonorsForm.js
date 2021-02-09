import React, { Component } from 'react';
import { ButtonGroup, Button, Alert, Card, OverlayTrigger } from 'react-bootstrap';

import { LOCATION } from '../constants';
import { europe } from '../utils/Popovers';

class DataDonorsForm extends Component{

    saveLocation = (location) => {
        this.props.handleLocChange({ type: 'dataDonors', location });
        this.props.nextStep();
    }

    render(){
      const { assessment } = this.props;
      return(
        <div>
          <h1> Where are the data subjects/data donors? </h1>
          <Alert variant='info' style={{paddingBottom: '1%'}}> Type of user: {assessment.userType}</Alert>
          <ButtonGroup style={{width:'60%'}} size="lg" vertical>
            <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={europe}>
                <Button variant='light' onClick={() => this.saveLocation(LOCATION.EU)}>Europe</Button>
            </OverlayTrigger>
            <Button variant='light' onClick={() => this.saveLocation(LOCATION.NON_EU)}>Non-Europe</Button>
          </ButtonGroup>
          <Card body
          style={{
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
          Please note that the GDPR applies in certain cases where the donors belong to the European Union and European Economic Area
          </Card>
        </div>
      )
    }
}

export default DataDonorsForm;
