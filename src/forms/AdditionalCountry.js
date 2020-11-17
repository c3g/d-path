import React, { Component } from 'react';
import { Container, Form, Jumbotron, Button, Col } from 'react-bootstrap'
//import { Link } from 'react-router-dom';

import Select from 'react-select';
import countryList from 'react-select-country-list';


class AdditionalCountry extends Component{

    constructor(props) {
      super(props)

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleOrganizationChange = this.handleOrganizationChange.bind(this);

      this.options = countryList().getData()

      this.state = {
        options: this.options,
        name: '',
        email: '',
        organizationInfo: '',
        country: '',
      }
    }

    changeHandler = country => {
      this.setState({ country });
    }

    handleNameChange = (event) => {
      this.setState({name: event.target.value});
     }

    handleEmailChange = (event) => {
      this.setState({email: event.target.value});
    }

    handleOrganizationChange = (event) => {
      this.setState({organizationInfo: event.target.value});
    }

    handleSubmit = (event) => {
      console.log(this.state);
      event.preventDefault();
      this.props.history.push('/');
    }


    render(){
        return(
            <Container>
              <Jumbotron>
                <h1 style={{marginBottom: '1rem'}}> Additional Country Form </h1>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Row style={{marginBottom: '1rem'}}>
                     <Col>
                     <Form.Label>Full Name</Form.Label>
                       <Form.Control
                          placeholder="First name"
                          onChange={this.handleNameChange}
                          value={this.state.name}
                        />
                     </Col>
                     <Col>
                       <Form.Label>Email address</Form.Label>
                       <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={this.handleEmailChange}
                          value={this.state.email}
                        />
                     </Col>
                  </Form.Row>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Additional Country</Form.Label>
                    <Select
                       options={this.state.options}
                       value={this.state.country}
                       onChange={this.changeHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Information about your organization</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        onChange={this.handleOrganizationChange}
                        value={this.state.organizationInfo}
                     />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Jumbotron>
            </Container>
        )
    }
}

export default AdditionalCountry;
