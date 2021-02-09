import React, { Component } from 'react';
import { Alert} from 'react-bootstrap';

class Success extends Component{

    render(){
      const { assessment } = this.props;
      return(
          <div>
              <h1 className='ui centered'> {assessment.userType === 'recipient' ? 'Data Recipient' : 'Data Donor'}</h1>
              <h5 className='ui centered' style={{fontSize: '17px', marginTop:'2%'}}>
                <Alert variant='info'  style={{paddingBottom: '1%', width: '60%', marginLeft:'20%'}}> Refer to
                {assessment.userType === 'recipient' ? ' the terms of service ' : ' your consent agreement '}
                with your data producer for your obligations. </Alert>

              </h5>
          </div>
      )
    }
}

export default Success;
