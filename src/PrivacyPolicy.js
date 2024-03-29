import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container} from 'react-bootstrap';
import myPDF from './media/PrivacyPolicy.pdf'
import Icon from 'react-fontawesome';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

class PrivacyPolicy extends Component {

  render() {
    return (
      <Container>
        <div>
          <Jumbotron>
            <h1 className='text-center' style={{ fontSize: '45px', fontWeight: '300', marginBottom: '1em' }}>
              Privacy Policy
            </h1>
            <div>
               <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
                <div id="pdfviewer">
                    <Viewer fileUrl={myPDF} />
                </div>
                </Worker>
            </div>
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

export default PrivacyPolicy;
