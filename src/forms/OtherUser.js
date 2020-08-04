import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Success extends Component{

    back = () => {
      this.props.prevStep();
      this.props.handleUserChange(undefined);
    }

    render(){
        return(
            <div>
                <h1 className="ui centered"> User: {this.props.userType}</h1>
                <h5>
                Refer to
                {this.props.userType == 'recipient' ? ' the Terms of Service ' : ' your Consent Agreement '}
                with your data producer for your obligations.
                </h5>
                <div style={{paddingTop: '2%'}}>
                    <Button variant={'warning'} onClick={this.back}>
                        Back
                    </Button>
                </div>
            </div>
        )
    }
}

export default Success;
