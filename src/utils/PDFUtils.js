import React from 'react';
import {styles} from './PDFStyles';
import {bestPracticesText, lawsText } from './TextLawsUtils';
import { Text} from '@react-pdf/renderer'

export const createTextPDF = (text) => {
  return (
    <Text style={styles.subtitle}>
       {text}
    </Text>
  );
}

export const getLawsPDF = (locations) => {
  return(<>
    <Text style={styles.title}>Laws and Policies </Text>
     { (locations.includes('Canada')) ? getCanadiandLawsPDF() : null }
     { (locations.includes('Europe')) ?  createTextPDF('Please refer to the Obligations and Requirements of the GDPR') : null }
     { (locations.includes('United States')) ? createTextPDF('Please refer to the US Legislation (HIPAA)') : null }
  </>);
}

export const getBestPracticesPDF = () => {
  return(<>
  <Text style={styles.subtitle}>
    Best Practices
  </Text>
  <Text style={styles.section}>
    Accountability
  </Text>
    {bestPracticesText.accountability.map(item => {
      return(
        <Text style={styles.text}>
        {item}
        </Text>
      );
    })}
  <Text style={styles.section}>
    Lawfulness of Use, Storage, Transfer and Protection
  </Text>
    {bestPracticesText.law.map(item => {
      return(
        <Text style={styles.text}>
        {item}
        </Text>
      );
    })}
  <Text style={styles.section}>
    Security and Safeguards
  </Text>
    {bestPracticesText.security.map(item => {
      return(
        <Text style={styles.text}>
        {item}
        </Text>
      );
    })}
  </>);
}

export const getCanadiandLawsPDF = () => {
  return(
  <>
    <Text style={styles.subtitle}>
      Canadian Jurisdiction
    </Text>
    <Text style={styles.section}>
      Accountability
    </Text>
      {lawsText.accountability.map(item => {
        return(
          <Text style={styles.text}>
          {item}
          </Text>
        );
      })}
    <Text style={styles.section}>
        Lawfulness of Use, Storage, Transfer and Protection
    </Text>
      {lawsText.law.map(item => {
        return(
          <Text style={styles.text}>
          {item}
          </Text>
        );
      })}
    <Text style={styles.section}>
      Security and Safeguards
    </Text>
      {lawsText.security.map(item => {
        return(
          <Text style={styles.text}>
          {item}
          </Text>
        );
      })}
  </>);
}
