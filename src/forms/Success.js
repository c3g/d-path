import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Success extends Component{

    saveInformation = (e) => {
        const { locations, isPersonalInfo, handleChange } = this.props;
        e.preventDefault();
        handleChange(locations, isPersonalInfo);
    }

    render(){
        const {answers, userType, isPersonalInfo, handleChange } = this.props;
        return(
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>
                <div style={{paddingTop: '3%'}}>
                <h4> Type of User: </h4>
                <p> { userType } </p>
                <h4> Locations selected :</h4>
                <div>
                    <h6>Where is the organization?</h6>
                    <p>{answers.organization}</p>
                </div>
                <div>
                    <h6>Where is the data processed?</h6>
                    <p>{answers.dataProcessed}</p>
                </div>
                <div>
                    <h6>Where are the data users?</h6>
                    <p>{answers.dataUsers}</p>
                </div>
                <div>
                    <h6>Where are the data donors?</h6>
                    <p>{answers.dataDonors}</p>
                </div>

                <h4> Is it personal Information? </h4>
                <p> { isPersonalInfo ? 'True' : 'False'}</p>
                </div>
                <div style={{paddingTop: '3%'}}>
                  <Link to="/">
                    <Button variant="danger"> Restart  </Button>
                  </Link>
                    <Button variant="success" onClick={(e) => this.saveInformation(e) }>
                        <Link to="/info" style={{color:'white'}}> Display Laws and Regulations </Link>
                    </Button>
                </div>
            </div>
        )
    }
}

export default Success;
