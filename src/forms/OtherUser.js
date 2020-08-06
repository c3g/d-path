import React, { Component } from 'react';

class Success extends Component{

    render(){
        return(
            <div>
                <h1 className='ui centered'> User: {this.props.userType}</h1>
                <h5>
                Refer to
                {this.props.userType === 'recipient' ? ' the Terms of Service ' : ' your Consent Agreement '}
                with your data producer for your obligations.
                </h5>
            </div>
        )
    }
}

export default Success;
