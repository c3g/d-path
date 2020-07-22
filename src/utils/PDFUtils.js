import React from 'react';
import {styles} from './PDFStyles';
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
  <Text style={styles.text}>
    Appoint a security officer responsible for
    implementing and enforcing security policies/practice, monitoring
    compliance with security policies through standards, audits and reviews.
  </Text>
  <Text style={styles.text}>
    Where relevant, the data steward should maintain communications
    with the relevant research ethics committees, data access committees, etc.
  </Text>
  <Text style={styles.text}>
    Data stewards should track changes in relevant laws, regulations, policies,
    expectations, and best practices and appropriately respond to them with communication
    and adjustments.
  </Text>
  <Text style={styles.text}>
    Procedure to utilize the complaints/inquires process should be easily accessible
    and simple to use. Consequences for data breaches should be clearly outlined and enforced.
  </Text>
  <Text style={styles.section}>
    Lawfulness of Use, Storage, Transfer and Protection
  </Text>
  <Text style={styles.text}>
    Policies and practices regarding privacy and security should be
    publicly available with plain language summaries. For data subjects/
    producers/hosts, general information on their data usage should
    be available. For data that is not anonymized, a procedure to provide
    data producers/subjects/hosts with additional information on how their
    data re being used should exist.
  </Text>
  <Text style={styles.text}>
    Policies should also address means to prevent indirect identity leaks through for e.g.
    metadata, URLs, and message headers. Assessments of data privacy risks should be
    conducted. These assessments should address various aspects of disclosure risks such as
    discrimination, profiling, reputation risks, etc.
  </Text>
  <Text style={styles.text}>
    Develop restoration mechanisms in case of a physical or technical incident.
  </Text>
  <Text style={styles.section}>
    Security and Safeguards
  </Text>
  <Text style={styles.text}>
  Have a process for testing, monitoring and evaluating those measures.
  Additionally, mechanism to maximize the likelihood of detecting data breaches
  should be in place. Whenever possible, technical measures, such as pseudonymization,
  should occur at the earliest oissubke opportunity.
  </Text>
  <Text style={styles.text}>
   Any changes relating to security should be reviewed for privacy and security impacts
   prior to implementation. Technical measures should have third party
   audit certifications.
  </Text>
  <Text style={styles.text}>
   Data should only be disclosed in situations where 1) Consent has been provided
   or 2) When there is a legal and appropriate need for disclosure.
   3) Data subjects have knowingly made their own identifiable data public.
  </Text>
  <Text style={styles.text}>
    Data sustainability is encouraged, where in accordance with the data subject's
    consent and the relevant laws, data should be retained for future
    processing through archiving, indexing, and retrieval systems.
  </Text>
  <Text style={styles.text}>
    Data breaches should be reported to the organization's data steward without undue delay.
    Additionally, they should be reported to the competent supervisory authority, data
    protection officer and relevant research ethics committee.
  </Text>
  <Text style={styles.text}>
    Additional mechanisms should be considered to address cases of compelled disclosure
    by state authorities.
  </Text>
  <Text style={styles.text}>
    Requests for data should be able to demonstrate at least:
      1) Legitimate purpose/interest/Use.
      2) Authorized accessibility to specific individuals.
      3) Reasonable and specific time period of data access.
      4) Destruction of data after use.
  </Text>
  <Text style={styles.text}>
    Organizations shall schedule internal and external security
    processes independently audited. Organizations should record and audit
    log of all security-related events. Where possible, audits and their documentations
    should be automated. Audit logs should be retained for at least a year
    or as specified by law.
  </Text>
  <Text style={styles.text}>
    Organizations shall schedule internal and external security processes
    independently audited. orhanizations should also record and audit log of
    all security-related events. Where possible, audits and their documentation shoudl
    be automated. Audit logs should be retained for at least a year or as
    specified by law.
  </Text>
  <Text style={styles.text}>
    Audits/Assessments should also assess data integrity and quality.
    Specifically, if data processing involves a vulnerable population.
    If practical, the organization should consider a vulnerable population-
    specific privacy impact assessment.
  </Text>
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
    <Text style={styles.text}>
        ID Person with highest authority in public body or designate a person
        so they are accountable for the compliance of the organization with
        corresponding laws.
    </Text>
    <Text style={styles.text}>
        Implement procedures to receive and respond to complaints and inquiries from
        user/clients.
    </Text>
    <Text style={styles.text}>
        Implement/require practices/policies for training staff regarding the
        policies/practices of the organization, including those regardgin privacy/security.
    </Text>
    <Text style={styles.section}>
        Lawfulness of Use, Storage, Transfer and Protection
    </Text>
    <Text style={styles.text}>
         Contractual or other means should be used to provide comparable levels of
         protection while information is processed by a third party.
         The management of health informations is governed by specific rules of laws with which
         the contract has to comply, particularly with respect to security measures.
    </Text>
    <Text style={styles.text}>
         Execute a contract that determines the type of information being transferred or communicated,
         ID the purposes and scope of the use and transfer/communication, terms of confidentiality,
         and terms/measures of data protection.
    </Text>
    <Text style={styles.text}>
          Display clear terms of service stating the purpose, limitations and conditions associated with the use of the data,
          including for instance that coded or anonymized data shall not be re-identified.
    </Text>
    <Text style={styles.text}>
          Data shall be collected used, and disclosed by fair and lawful means and limited to the
          identified purposes. Details on collection, storage, and disclosure shall be informed.
          Before relasing to outside of the province, equivalent protection shall be ensured in the recipient's
          policies/practices.
    </Text>
    <Text style={styles.text}>
          Policies/Practices on the management of personal information shall be
          implemented and made readily available.
    </Text>
    <Text style={styles.text}>
        Personal information shall be as accurate, complete, and up-to-date
        as necessary. Everyone shall be able to request the correction of their personal information.
    </Text>
    <Text style={styles.text}>
        An inventory shall be kept with info pertaining the content and protection measures.
    </Text>
    <Text style={styles.section}>
      Security and Safeguards
    </Text>
    <Text style={styles.text}>
           Reasonable security measures to ensure the protection of personal information
           shall be implemented based on the sensitivity of the information, the purposes
           for which it is used, the quantity and distribution, and the medium on which it is stored.
           They shall be against theft, loss, damage, unauthorized access, disclosure, copying,
           modification or use. They can be physical, organizational or technological.
    </Text>
    <Text style={styles.text}>
           Technological measures can include: coding, de-identification, encryption,
          anonymization, firewalls; physical measures can include: locked filing cabinets
          and restricted access to offices; and administrative/organizational measures can include:
          security clearances and limited access on need-to-know basis.
    </Text>
    <Text style={styles.text}>
            Data security breaches shall be reported to the Commissioner
            if believed to create real risk of significant harm
            (bodily harm, humiliation, damage to reputation or relationship,
            loss of employment, business or professional opportunities,
            financial loss, identity theft, negative effects on credit,
            damage or loss of property) to an individual.
    </Text>
    <Text style={styles.text}>
           Organizations shall keep a record of every breach of data security.
           Have response mechanisms in case of data breach, including who to inform or report.
           Record keeping shall include: type of event, data/time,
           success/failure, origin, data/system/resources affected.
    </Text>
    <Text style={styles.text}>
           Data Access committee to assess the data recipient/user and the intended use.
           Execute a data access contract that that determines the type of information
           being transferred or communicated, ID the purposes and scope of the transfer/communication,
           terms of confidentiality, and terms/measures of data protection.
    </Text>
    <Text style={styles.text}>
         Display clear terms of service stating the purpose, limitations and
         conditions associated with the use of the data, including for instance
         that coded or anonymized data shall not be re-identified.
    </Text>
    <Text style={styles.text}>
         Organizations may be audited by a higher institutions to verify the
         practices/policies of management of personal information.
    </Text>
    <Text style={styles.text}>
         Regularity and extent of audits has an impact on the grant/renewal
        of organizations' acreditation
    </Text>
  </>);
}
