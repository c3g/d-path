import React, { Component } from 'react';
import { Alert} from 'react-bootstrap';

class Success extends Component{

    render(){
      const { assessment } = this.props;
      return(
          <div>
              <h1 className='ui centered'> {assessment.userType === 'recipient' ? 'Data Recipient' : 'Data Donor'}</h1>
              <h5 className='ui centered'>
                <Alert variant='info' style={{paddingBottom: '1%'}}> Refer to
                {assessment.userType === 'recipient' ? ' the Terms of Service ' : ' your Consent Agreement '}
                with your data producer for your obligations. </Alert>

              </h5>
          </div>
      )
    }
}

export default Success;
