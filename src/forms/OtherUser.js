import React, { Component } from 'react';

class Success extends Component{

    render(){
      const { assessment } = this.props;
      return(
          <div>
              <h1 className='ui centered'> User: {assessment.userType}</h1>
              <h5>
               Refer to
               {assessment.userType === 'recipient' ? ' the Terms of Service ' : ' your Consent Agreement '}
               with your data producer for your obligations.
              </h5>
          </div>
      )
    }
}

export default Success;
