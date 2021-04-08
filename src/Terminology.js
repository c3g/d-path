import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Accordion, Card, Button} from 'react-bootstrap';
import Icon from 'react-fontawesome';
import ReactPaginate from 'react-paginate';

import {terminologyObjects} from './utils/Terminology.js'

class Terminology extends Component {

  constructor() {
    super();
      this.state = {
        terms : terminologyObjects,
        offset: 0,
        currentTerms : terminologyObjects.slice(0, 10),
        itemsPerPage: 10,
        pageCount: terminologyObjects.length / 10

    };
    console.log(this.state.terms);
  }

  handlePageClick = (data) => {
    const pageSelected = data.selected;
    this.setState({offset: this.state.itemsPerPage * pageSelected}, () => {
      this.updateItems();
    } );
  }

  updateItems = () => {
    const {offset, itemsPerPage} = this.state;
    this.setState({
      currentTerms: terminologyObjects.slice(offset, offset+itemsPerPage)
    });
  }

   getItems = (item) => {
     return(
       <Card>
         <Card.Header>
           <Accordion.Toggle as={Button} variant="link" eventKey={item.id}>
             {item.term}
           </Accordion.Toggle>
         </Card.Header>
         <Accordion.Collapse eventKey={item.id}>
           <Card.Body>{item.definition}</Card.Body>
         </Accordion.Collapse>
      </Card>
    );
  }

  render() {
    return (
      <Container>
        <div>
          <Jumbotron>
            <h1 className='text-center' style={{ fontSize: '45px', fontWeight: '300', marginBottom: '1em' }}>
              Terminology
            </h1>
            <Accordion >
              {this.state.currentTerms.map( (item) => {
                  return this.getItems(item)
              })}
            </Accordion>
            {console.log(this.state.pageCount)}
            <ReactPaginate
             previousLabel={'Previous'}
             nextLabel={'Next'}
             breakLabel={'...'}
             breakClassName={'item'}
             pageCount={this.state.pageCount}
             marginPagesDisplayed={2}
             pageRangeDisplayed={5}
             onPageChange={this.handlePageClick}
             containerClassName={'pagination'}
             activeClassName={'active'}
             pageClassName={'page-item'}
             pageLinkClassName={'page-link'}
             previousClassName={'previous'}
             previousLinkClassName={'previous-link'}
             nextClassName={'next'}
             nextLinkClassName={'next-link'}
           />
            <div className='text-center' style={{marginTop: '1rem'}}>
              <Link to='/' className='btn btn-primary btn-lg'>
              <Icon name="home"/>    Back
              </Link>
            </div>
          </Jumbotron>
        </div>
      </Container>
    );
  }
}

export default Terminology;
