import React, { Component } from 'react';
import { Container, Jumbotron, Button, Card, Alert } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, Font, Image} from '@react-pdf/renderer'
import Icon from 'react-fontawesome';
import {styles} from './utils/PDFStyles';
import {getSummaryPDF, getLawsPDF, getBestPracticesPDF } from './utils/PDFUtils';
import {getLaws, getBestPractices} from './utils/ObligationsUtils';
import { LOCATION, INFO_TYPE } from './constants';

function InfoDocument({locations, assessment}) {
  // Create styles
  Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });

  return (
    <Document>
    <Page style={styles.body}>
    <Image
      style={styles.image}
      src={require('./media/logoD-Path.png')}
    />
      <Text style={styles.header} fixed>
        Please note that this is NOT a legal assessment.
      </Text>
      <Text style={styles.title}>SUMMARY</Text>
        { getSummaryPDF(assessment) }
      <Text break style={styles.title}>OBLIGATIONS AND REQUIREMENTS</Text>
      <Text style={styles.headerWarning}> • The list below includes the key obligations that you have with respect to data. Those of your collaborators may differ. • </Text>
        { (assessment.isPersonalInfo) && getLawsPDF(locations, assessment) }
        { getBestPracticesPDF(assessment.isPersonalInfo) }
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
      <Image
        style={styles.imageBottom}
        src={require('./media/logoD-Path.png')}
        fixed
      />
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
    const justDPRApplies = (assessment.answers.dataDonors === LOCATION.EU || assessment.answers.organization === LOCATION.EU) && (assessment.infoType !== INFO_TYPE.ANONYMOUS && assessment.infoType !== INFO_TYPE.ANONYMIZED)? true : false;

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
            <Card body style={{ textAlign: 'center', marginBottom: '1rem', backgroundColor: '#fff3cd'}}>
              <strong style={{fontSize: '1rem'}}> The list below includes the key obligations that you have with respect to data. Those of your collaborators may differ. </strong>
            </Card>
            {
              (assessment.isPersonalInfo) &&
              <>
              <Card body style={{ textAlign: 'center', marginBottom: '1rem', backgroundColor: '#fff3cd'}}>
                <strong style={{fontSize: '1rem'}}> Please note that many legal jurisdictions, such as those in Canada, make a distinction between information that is deemed “public information” and information that is “publicly accessible.” In general, information that is truly public has been formally designated as such and can be used with very little or no restrictions.
                However, information that is publicly accessible may still invoke various requirements or restrictions, when it is used. </strong>
              </Card>
              </>
            }
            { (assessment.isPersonalInfo || justDPRApplies) &&
              <>
                <h1 className='obligationTitle'>Laws and Policies</h1>
                {getLaws({
                  locations,
                  assessment,
                  activeLaws,
                  onMouseEnter: this.onMouseEnterLaw,
                  onMouseLeave: this.onMouseLeaveLaw,
                })}
              </>
            }
            { assessment.areServicesOffered === LOCATION.EU && !locations.includes('Europe') && <> <Alert variant='warning'> Returning individual research results to participants in the EU may make the GDPR apply with respect to the personal data of individuals located in the EU. Please seek out further advice. </Alert> </> }

            <h1 className='obligationTitle'>Best Practices (Optional)</h1>
            { getBestPractices({
              activeBestPractices,
              onMouseEnter: this.onMouseEnterBestPractice,
              onMouseLeave: this.onMouseLeaveBestPractice,
            })}

            <hr />

            <div className='Info__buttons'>
              <PDFDownloadLink
                document={<InfoDocument locations={locations} assessment={assessment} />}
                fileName="ObligationsAndRequirements.pdf"
              >
                <Button variant="primary">Download PDF</Button>
              </PDFDownloadLink>
              <div className='fill' />
              <Link to="/" className='resetButton' onClick={this.props.resetAssessment}>
                <Icon name='refresh' /> Reset
              </Link>
            </div>
          </Jumbotron>
          <Card body
          style={{
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
          <strong> Please note that this is NOT a legal assessment. </strong>
          <hr />
          If your country's obligations are not listed in detail you can send us an email to info@computationalgenomics.ca
          </Card>
        </Container>
    )
  }
}

export default Info;
