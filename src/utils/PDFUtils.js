import React from 'react';
import {styles} from './PDFStyles';
import {bestPracticesText, quebecLawsText, euroLawsText } from './TextLawsUtils';
import { Text, Link} from '@react-pdf/renderer'
import { PROCESSOR, PROVINCES, LOCATION } from '../constants';

export const createTextPDF = (text) => {
  return (
    <Text style={styles.subtitle}>
       {text.replace(/[0-9]/g, '')}
    </Text>
  );
}

export const getLawsPDF = (locations, assessment) => {

  const getOtherCountries = () => {
    const valuesToRemove = ["Canada", "Europe", "United States"];
    return Array.from(new Set(locations.filter((i) => !valuesToRemove.includes(i))));
  }

  return(<>
    <Text style={styles.title}> Laws and Policies </Text>
     { (locations.includes('Canada')) && assessment.province === PROVINCES.QC && getQuebecLawsPDF() }
     { (locations.includes('Canada')) && assessment.province !== PROVINCES.QC && assessment.processor !== PROCESSOR.NON_COMM &&
        assessment.processor.laws.map(law => {
          return createTextPDF(`• Please refer to the ${law} of Canada`)
        })
     }
     { (locations.includes('Canada')) && assessment.processor === PROCESSOR.NON_COMM &&
       createTextPDF(`• Privacy laws do NOT apply. `)
     }
     { (locations.includes('Europe')) &&  getEuropeanLawsPDF(assessment.hasDoubleLegislationWarning) }
     { assessment.answers.organization !== LOCATION.EU && assessment.answers.dataDonors === LOCATION.EU && getGDPRWarningProject() }
     { assessment.areServicesOffered === LOCATION.EU && !locations.includes('Europe') && getGDPRWarningParticipants() }
     { (locations.includes('United States')) && createTextPDF('• Please refer to the US Legislation (HIPAA)') }
     {getOtherCountries().map(country => {
       return createTextPDF(`• Please refer to the Privacy Legislation of ${country}`)
      })
     }
  </>);
}

export const getSummaryPDF = (assessment) => {
  const { userType, isPersonalInfo, infoType, answers, processor, province, isHealthInformation, crossesBorders, areServicesOffered} = assessment;

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
      Where is the organization/project? {answers.organization}
    </Text>
    <Text style={styles.textSummary}>
      Where is the monitored behaviour of the data donors? {answers.dataDonors}
    </Text>
    <Text style={styles.textSummary}>
      Were services offered? {areServicesOffered ? 'Yes' : 'No'}
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
    { /* <Text style={styles.sectionSummary}>
      Applicable Legislation(s)
    </Text>
      {processor && processor.laws.map(law => {
        return <Text style={styles.textSummary}> {law}  </Text>
      })}
    */}
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

export const getEuropeanLawsPDF = (hasDoubleLegislationWarning) => {
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
      { hasDoubleLegislationWarning && getGDPRWarningDoubleLegislation() }
      { getGDPRWarningConcurrently() }
      { getGDPRWarningInvitation() }
  </>);
}

export const getGDPRWarningParticipants = () => {
  return(
  <>
    <Text style={styles.warning}>
      • Warning
    </Text>
    <Text style={styles.text}>
      Returning individual research results to participants in the EU may make the GDPR apply with respect to the personal data of individuals located in the EU. Please seek out further advice.
    </Text>
  </>);
}

export const getGDPRWarningDoubleLegislation = () => {
  return(
  <>
    <Text style={styles.warning}>
      • Warning
    </Text>
    <Text style={styles.text}>
      These obligations apply to the data protected by the specific legislation with which the data is associated.
    </Text>
  </>);
}

export const getGDPRWarningConcurrently = () => {
  return(
  <>
    <Text style={styles.warning}>
      • Warning
    </Text>
    <Text style={styles.text}>
      Please be aware that local national privacy laws may concurrently be applicable. Please seek out further advice.
    </Text>
  </>);
}

export const getGDPRWarningProject = () => {
  return(
  <>
    <Text style={styles.warning}>
      • Warning
    </Text>
    <Text style={styles.text}>
      As a project without an establishment in the EU, the EU’s GDPR may only apply with respect to your processing of the personal data of individuals located in the EU.
    </Text>
  </>);
}

export const getGDPRWarningInvitation = () => {
  return(
  <>
    <Text style={styles.warning}>
      • Warning
    </Text>
    <Text style={styles.text}>
      We also invite you to <Link src="https://www.ga4gh.org/genomic-data-toolkit/regulatory-ethics-toolkit/gdpr-forum/"> read the "briefs" from GA4GH's GDPR and International Health Data Sharing Forum </Link>, which analyzes the General Data Protection Regulation (GDPR) for the genomics community.
    </Text>
  </>);
}
