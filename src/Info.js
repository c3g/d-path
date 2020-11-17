import React, { Component } from 'react';
import { Container, Jumbotron, Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, Font} from '@react-pdf/renderer'
import Icon from 'react-fontawesome';
import {styles} from './utils/PDFStyles';
import {getLawsPDF, getBestPracticesPDF } from './utils/PDFUtils';
import {getLaws, getBestPractices, getLawCards, getBestPracticesCards} from './utils/ObligationsUtils';

function InfoDocument({locations, assessment}) {
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
        { (assessment.isPersonalInfo) && getLawsPDF(locations, assessment) }
        { getBestPracticesPDF() }
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
    </Document>)
}

class Info extends Component {

  state = {
    activeLaws: [],
    activeBestPractices: [],
  }

  onMouseEnterLaw = activeLaws => {
    this.setState({ activeLaws })
  }

  onMouseLeaveLaw = () => {
    this.setState({ activeLaws: [] })
  }

  onMouseEnterBestPractice = activeBestPractices => {
    this.setState({ activeBestPractices })
  }

  onMouseLeaveBestPractice = () => {
    this.setState({ activeBestPractices: [] })
  }


  render(){
    const { activeLaws, activeBestPractices } = this.state;
    const { locations, assessment } = this.props;

    return(
        <Container>
          <Jumbotron>
            <h6
              style={{
                marginBottom: '1em',
                fontSize: '0.9em',
                fontWeight: 'normal',
                textTransform: 'uppercase',
                letterSpacing: 1,
                opacity: 0.4,
              }}
            >
              Obligations and requirements
            </h6>

            <hr />
            { assessment.isPersonalInfo &&
              <>
                <h1 className='obligationTitle'>Laws and Policies</h1>
                {locations.includes('Canada') && assessment.province==='Quebec' &&
                  getLawCards({
                    locations,
                    assessment,
                    activeLaws,
                })}
                {getLaws({
                  locations,
                  assessment,
                  onMouseEnter: this.onMouseEnterLaw,
                  onMouseLeave: this.onMouseLeaveLaw,
                })}
              </>
            }

            <h1 className='obligationTitle'>Best Practices (Optional)</h1>
            { getBestPracticesCards({ activeBestPractices }) }
            { getBestPractices({
              onMouseEnter: this.onMouseEnterBestPractice,
              onMouseLeave: this.onMouseLeaveBestPractice,
            }) }

            <hr />

            <div className='Info__buttons'>
              <PDFDownloadLink
                document={<InfoDocument locations={locations} assessment={assessment} />}
                fileName="ObligationsAndRequirements.pdf"
              >
                <Button variant="primary">Download PDF</Button>
              </PDFDownloadLink>
              <div className='fill' />
              <Link to="/" className='resetButton' onClick={this.reset}>
                <Icon name='refresh' /> Reset
              </Link>
            </div>
          </Jumbotron>
          <Card body
          style={{
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
          Please note that is not an official legal assessment.
          <hr />
          If your country's obligations are not listed in detail you can click
            <Link to="/additionalCountry"> here </Link>
          </Card>
        </Container>
    )
  }
}

export default Info;
