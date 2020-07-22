import React, { Component } from 'react';
import {Container, Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, Font} from '@react-pdf/renderer'
import {styles} from './utils/PDFStyles';
import {getLawsPDF, getBestPracticesPDF } from './utils/PDFUtils';
import {getLaws, getBestPractices} from './utils/ObligationsUtils';

class Info extends Component {

    constructor(props) {
        super(props);
    }

    saveInformation = (e, value) => {
        e.preventDefault();
        this.props.handleChange(value);
    }

    createDocument = () => {
      const {locations, isPersonalInfo} = this.props;

      // Create styles
      Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
      });

      return (
        <Document>
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            ~ D-Path Tool ~
          </Text>
          <Text style={styles.title}>OBLIGATIONS AND REQUIREMENTS</Text>
          <Text style={styles.author}>Epishare</Text>
            { (isPersonalInfo) ? getLawsPDF(locations) : null }
            { getBestPracticesPDF() }
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} fixed />
        </Page>
        </Document>)
    }

    render(){
        const {locations, isPersonalInfo} = this.props;
        const MyDoc = () => this.createDocument();
        return(
        <Container>
          <div>
            <Jumbotron>
              <h1> Obligations and requirements </h1>
                <p> { isPersonalInfo ? getLaws(locations) : null } </p>
                <p> { getBestPractices() } </p>
                    <Link to="/">
                      <Button variant="danger"> Restart  </Button>
                    </Link>
                    <div style={{paddingTop: '1%'}}>
                     <PDFDownloadLink document={<MyDoc />} fileName="ObligationsAndRequirements.pdf">
                      <Button variant="info"> Download PDF  </Button>
                     </PDFDownloadLink>
                   </div>
            </Jumbotron>
          </div>
        </Container>)
    }
}

export default Info;
