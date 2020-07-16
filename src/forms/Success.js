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
        const {data, userType, locations, isPersonalInfo, handleChange } = this.props;
        return(
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>
                <div style={{paddingTop: '3%'}}>
                <h4> Type of User: </h4>
                <p> { userType } </p>
                <h4> Locations selected :</h4>
                {data.map(( item ) => {
                    return (
                      <div style={{paddingTop: '1%'}}>
                        <h6> {item.print} </h6>
                        <p> {item.location} </p>
                      </div>
                    );
                  })}
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
