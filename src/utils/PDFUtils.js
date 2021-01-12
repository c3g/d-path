import React from 'react';
import {styles} from './PDFStyles';
import {bestPracticesText, quebecLawsText, euroLawsText } from './TextLawsUtils';
import { Text} from '@react-pdf/renderer'
import { PROCESSOR } from '../constants';

export const createTextPDF = (text) => {
  return (
    <Text style={styles.subtitle}>
       {text}
    </Text>
  );
}

export const getLawsPDF = (locations, assessment) => {
  const province = assessment.province;
  return(<>
    <Text style={styles.title}>Laws and Policies </Text>
     { (locations.includes('Canada')) && assessment.province==='Quebec' && getQuebecLawsPDF() }
     { (locations.includes('Canada')) && assessment.province!=='Quebec' && assessment.processor !== PROCESSOR.NON_COMM &&
        createTextPDF(`• Please refer to the ${assessment.processor.laws} Legislation of ${(province) ? province : 'Canada'}`)
     }
     { (locations.includes('Canada')) &&assessment.processor === PROCESSOR.NON_COMM &&
       createTextPDF(`• Privacy laws do NOT apply. `)
     }
     { (locations.includes('Europe')) &&  getEuropeanLawsPDF() }
     { (locations.includes('United States')) && createTextPDF('• Please refer to the US Legislation (HIPAA)') }
  </>);
}

export const getBestPracticesPDF = () => {
  return(<>
  <Text style={styles.title}>
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
    <Text style={styles.subtitle}>
      Please note that this is NOT a formal legal assessment.
    </Text>
  </>);
}

export const getQuebecLawsPDF = () => {
  return(
  <>
    <Text style={styles.subtitle}>
      • Quebec Jurisdiction
    </Text>
    <Text style={styles.section}>
      Accountability
    </Text>
      {quebecLawsText.accountability.map(item => {
        return(
          <Text style={styles.text}>
          {item}
          </Text>
        );
      })}
    <Text style={styles.section}>
        Lawfulness of Use, Storage, Transfer and Protection
    </Text>
      {quebecLawsText.law.map(item => {
        return(
          <Text style={styles.text}>
          {item}
          </Text>
        );
      })}
    <Text style={styles.section}>
      Security and Safeguards
    </Text>
      {quebecLawsText.security.map(item => {
        return(
          <Text style={styles.text}>
          {item}
          </Text>
        );
      })}
  </>);
}

export const getEuropeanLawsPDF = () => {
  return(
  <>
    <Text style={styles.subtitle}>
      • European Jurisdiction - GDPR
    </Text>
    <Text style={styles.section}>
      Accountability
    </Text>
      {euroLawsText.accountability.map(item => {
        return(
          <Text style={styles.text}>
          {item}
          </Text>
        );
      })}
    <Text style={styles.section}>
        Lawfulness of Use, Storage, Transfer and Protection
    </Text>
      {euroLawsText.law.map(item => {
        return(
          <Text style={styles.text}>
          {item}
          </Text>
        );
      })}
    <Text style={styles.section}>
      Security and Safeguards
    </Text>
      {euroLawsText.security.map(item => {
        return(
          <Text style={styles.text}>
          {item}
          </Text>
        );
      })}
  </>);
}
