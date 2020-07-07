import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Success extends Component{
    render(){
        return(
            <div>
                <h1 className="ui centered">Details Successfully Saved</h1>
                <div style={{paddingTop: '3%'}}>
                  <Link to="/">
                    <Button variant="danger"> Restart  </Button>
                  </Link>
                </div>
            </div>
        )
    }
}

export default Success;
