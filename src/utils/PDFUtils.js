import React from 'react';
import {styles} from './PDFStyles';
import {bestPracticesText, quebecLawsText, euroLawsText } from './TextLawsUtils';
import { Text} from '@react-pdf/renderer'
import { PROCESSOR } from '../constants';

export const createTextPDF = (text) => {
  return (
    <Text style={styles.subtitle}>
       {text.replace(/[0-9]/g, '')}
    </Text>
  );
}

export const getLawsPDF = (locations, assessment) => {
  const province = assessment.province;

  const getOtherCountries = () => {
    const valuesToRemove = ["Canada", "Europe", "United States"];
    return Array.from(new Set(locations.filter((i) => !valuesToRemove.includes(i))));
  }

  return(<>
    <Text style={styles.title}>Laws and Policies </Text>
     { (locations.includes('Canada')) && assessment.province==='Quebec' && getQuebecLawsPDF() }
     { (locations.includes('Canada')) && assessment.province!=='Quebec' && assessment.processor !== PROCESSOR.NON_COMM &&
        assessment.processor.laws.map(law => {
          return createTextPDF(`• Please refer to the
            ${law} Legislation of
            ${(province) ? province.name : 'Canada'}`)
        })
     }
     { (locations.includes('Canada')) &&assessment.processor === PROCESSOR.NON_COMM &&
       createTextPDF(`• Privacy laws do NOT apply. `)
     }
     { (locations.includes('Europe')) &&  getEuropeanLawsPDF() }
     { (locations.includes('United States')) && createTextPDF('• Please refer to the US Legislation (HIPAA)') }
     {getOtherCountries().map(country => {
       return createTextPDF(`• Please refer to the Privacy Legislation of ${country}`)
      })
     }
  </>);
}

export const getSummaryPDF = (assesment) => {
  const { userType, isPersonalInfo, infoType, isPublic, answers, processor, province, isHealthInformation, crossesBorders} = assesment;

  const healthInfoText = (
    <>
      <Text style={styles.sectionSummary}>
        Is it health information?
      </Text>
      <Text style={styles.textSummary}>
        {isHealthInformation && isHealthInformation ? 'Yes' : 'No'}
      </Text>
    </>
  )

  const crossesBordersText = (
    <>
      <Text style={styles.sectionSummary}>
        Is the information crossing borders?
      </Text>
      <Text style={styles.textSummary}>
        {crossesBorders && crossesBorders ? 'Yes' : 'No'}
      </Text>
    </>
  )

  const provinceText = (
    <>
      <Text style={styles.sectionSummary}>
        In which province is the information processed?
      </Text>
      <Text style={styles.textSummary}>
        {province && province.name}
      </Text>
    </>
  )

  return(
    <>
    <Text style={styles.sectionSummary}>
      Locations Selected
    </Text>
    <Text style={styles.textSummary}>
      Where is the organization? {answers.organization}
    </Text>
    <Text style={styles.textSummary}>
      Where is the data processed? {answers.dataProcessed}
    </Text>
    <Text style={styles.textSummary}>
      Where are the data users? {answers.dataUsers}
    </Text>
    <Text style={styles.textSummary}>
      Where are the data donors? {answers.dataDonors}
    </Text>
    <Text style={styles.sectionSummary}>
      Type of User
    </Text>
    <Text style={styles.textSummary}>
      {userType && userType.charAt(0).toUpperCase() + userType.slice(1)}
    </Text>
    <Text style={styles.sectionSummary}>
      Information Type
    </Text>
    <Text style={styles.textSummary}>
      {infoType}
    </Text>
    <Text style={styles.sectionSummary}>
      Is it public information?
    </Text>
    <Text style={styles.textSummary}>
      {isPublic ? 'Yes' : 'No'}
    </Text>
    <Text style={styles.sectionSummary}>
      Is it personal information?
    </Text>
    <Text style={styles.textSummary}>
      {isPersonalInfo ? 'Yes' : 'No'}
    </Text>
    { isHealthInformation && healthInfoText }
    { crossesBorders && crossesBordersText }
    <Text style={styles.sectionSummary}>
      Who processes the information?
    </Text>
    <Text style={styles.textSummary}>
      {processor && processor.body}
    </Text>
    { province && provinceText }
    <Text style={styles.sectionSummary}>
      Applicable Legislation(s)
    </Text>
      {processor && processor.laws.map(law => {
        return <Text style={styles.textSummary}> {law}  </Text>
      })}
    </>);
}

export const getBestPracticesPDF = (isPersonalInfo) => {
  return(<>
  <Text break={isPersonalInfo} style={styles.title}>
    Best Practices
  </Text>
  <Text style={styles.optional}>
    Non-Mandatory/Optional
  </Text>
  <Text style={styles.section}>
    Accountability
  </Text>
    {bestPracticesText.accountability.map(item => {
      return(
        <Text style={styles.text}>
        {item.replace(/\([^)]*\)/g, '')}
        </Text>
      );
    })}
  <Text style={styles.section}>
    Lawfulness of Use, Storage, Transfer and Protection
  </Text>
    {bestPracticesText.law.map(item => {
      return(
        <Text style={styles.text}>
        {item.replace(/\([^)]*\)/g, '')}
        </Text>
      );
    })}
  <Text style={styles.section}>
    Security and Safeguards
  </Text>
    {bestPracticesText.security.map(item => {
      return(
        <Text style={styles.text}>
        {item.replace(/\([^)]*\)/g, '')}
        </Text>
      );
    })}
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
          {item.replace(/\([^)]*\)/g, '')}
          </Text>
        );
      })}
    <Text style={styles.section}>
        Lawfulness of Use, Storage, Transfer and Protection
    </Text>
      {quebecLawsText.law.map(item => {
        return(
          <Text style={styles.text}>
          {item.replace(/\([^)]*\)/g, '')}
          </Text>
        );
      })}
    <Text style={styles.section}>
      Security and Safeguards
    </Text>
      {quebecLawsText.security.map(item => {
        return(
          <Text style={styles.text}>
          {item.replace(/\([^)]*\)/g, '')}
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
          {item.replace(/\([^)]*\)/g, '')}
          </Text>
        );
      })}
    <Text style={styles.section}>
        Lawfulness of Use, Storage, Transfer and Protection
    </Text>
      {euroLawsText.law.map(item => {
        return(
          <Text style={styles.text}>
          {item.replace(/\([^)]*\)/g, '')}
          </Text>
        );
      })}
    <Text style={styles.section}>
      Security and Safeguards
    </Text>
      {euroLawsText.security.map(item => {
        return(
          <Text style={styles.text}>
          {item.replace(/\([^)]*\)/g, '')}
          </Text>
        );
      })}
  </>);
}
