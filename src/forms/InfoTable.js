import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class InfoTable extends Component{
  constructor(props) {
   super(props);
  }

  componentWillMount(){
    this.setState({
      data: this.props.values
    });
  }
    render(){
        return(
          <Table striped bordered hover style={{color:'white'}}>
            <thead>
              <tr>
                <th >Type</th>
                <th>Location</th>
                <th>Personal Information</th>
              </tr>
            </thead>
            <tbody>
            {this.state.data.map(( item ) => {
                return (
                  <tr>
                    <td> {item.type} </td>
                    <td> {item.location} </td>
                    <td> {item.isPerfonalInfo ? 'true' : 'false'} </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )
    }
}

export default InfoTable;
