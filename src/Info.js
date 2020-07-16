import React, { Component } from 'react';
import {Container, Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet} from '@react-pdf/renderer'

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
       const styles = StyleSheet.create({
         page: {
           flexDirection: 'row',
           backgroundColor: '#E4E4E4'
         },
         section: {
           margin: 10,
           padding: 10,
           flexGrow: 1
         }
       });

      return (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
            {locations.map(( item ) => {
                return (
                  <Text style={{paddingTop: '1%'}}>
                    {item}
                  </Text>
                );
              })}
            </View>
            <View style={styles.section}>
              <Text> Personal Info: {isPersonalInfo ? 'True' : 'False'} </Text>
            </View>
          </Page>
        </Document>)
    }

    render(){
        const {locations, isPersonalInfo} = this.props;
        const styles = StyleSheet.create({
          page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
          },
          section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
          }
        });
        const MyDoc = () => this.createDocument();
        return(
        <Container>
          <div>
            <Jumbotron>
              <h1> Laws and Regulations </h1>
                {locations.map(( item ) => {
                    return (
                      <div style={{paddingTop: '1%'}}>
                        <h6> {item} </h6>
                      </div>
                    );
                  })}
                <p>
                <p> Personal Info: {isPersonalInfo ? 'True' : 'False'} </p>
                    <Link to="/">
                      <Button variant="danger"> Restart  </Button>
                    </Link>
                    <div style={{paddingTop: '1%'}}>
                     <PDFDownloadLink document={<MyDoc />} fileName="LawsAndRegulations.pdf">
                      <Button variant="info"> Download PDF  </Button>
                     </PDFDownloadLink>
                   </div>
                </p>
            </Jumbotron>
          </div>
        </Container>)
    }
}

export default Info;
