import React from 'react';
import {Card, ListGroup, Tabs, Tab, Col, Row} from 'react-bootstrap';

export const createCard = (text) => {
  return (
    <Card.Body>
     {text}
    </Card.Body>
  );
}

export const createText = (text) => {
  return (
    <Card.Header className='text-center'>
      <h5> {text} </h5>
    </Card.Header>
  );
}

export const getLaws = (locations) => {
  return(<Card>
    <Card.Header as='h5'>Laws and Policies </Card.Header>
     { (locations.includes('Canada')) && createCard(getCanadiandLaws()) }
     { (locations.includes('Europe')) &&  createText('Please refer to the Obligations and Requirements of the GDPR') }
     { (locations.includes('United States')) && createText('Please refer to the US Legislation (HIPAA)')  }
  </Card>);
}

export const getBestPractices = () => {
  return(<Card>
    <Card.Header as='h5'>Best Practices</Card.Header>
    <Card.Body>
     <Tabs defaultActiveKey='accountability' id='uncontrolled-tab-example'>
     <Tab eventKey='accountability' title='Accountability'>
      <Card.Text style={{ paddingTop: '1%'}}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
          Appoint a security officer responsible for
          implementing and enforcing security policies/practice, monitoring
          compliance with security policies through standards, audits and reviews. (2)
          </ListGroup.Item>
          <ListGroup.Item>
           Where relevant, the data steward should maintain communications
           with the relevant research ethics committees, data access committees, etc. (2)
          </ListGroup.Item>
          <ListGroup.Item>
           Data stewards should track changes in relevant laws, regulations, policies,
           expectations, and best practices and appropriately respond to them with communication
           and adjustments. (2)
          </ListGroup.Item>
          <ListGroup.Item>
           Procedure to utilize the complaints/inquires process should be easily accessible
           and simple to use. Consequences for data breaches should be clearly outlined and enforced. (2)
          </ListGroup.Item>
        </ListGroup>
       </Card.Text>
      </Tab>
      <Tab eventKey='law' title='Lawfulness of Use, Storage, Transfer and Protection'>
       <Card.Text style={{ paddingTop: '1%'}}>
         <ListGroup variant='flush'>
           <ListGroup.Item>
           Policies and practices regarding privacy and security should be
           publicly available with plain language summaries. For data subjects/
           producers/hosts, general information on their data usage should
           be available. For data that is not anonymized, a procedure to provide
           data producers/subjects/hosts with additional information on how their
           data re being used should exist. (2)
           </ListGroup.Item>
           <ListGroup.Item>
            Policies should also address means to prevent indirect identity leaks through for e.g.
            metadata, URLs, and message headers. Assessments of data privacy risks should be
            conducted. These assessments should address various aspects of disclosure risks such as
            discrimination, profiling, reputation risks, etc. (2)
           </ListGroup.Item>
           <ListGroup.Item>
            Develop restoration mechanisms in case of a physical or technical incident. (2)
           </ListGroup.Item>
         </ListGroup>
        </Card.Text>
       </Tab>
       <Tab eventKey='security' title='Security and Safeguards'>
        <Card.Text style={{ paddingTop: '1%'}}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
            Have a process for testing, monitoring and evaluating those measures.
            Additionally, mechanism to maximize the likelihood of detecting data breaches
            should be in place. Whenever possible, technical measures, such as pseudonymization,
            should occur at the earliest oissubke opportunity. (2)
            </ListGroup.Item>
            <ListGroup.Item>
             Any changes relating to security should be reviewed for privacy and security impacts
             prior to implementation. Technical measures should have third party
             audit certifications. (2)
            </ListGroup.Item>
            <ListGroup.Item>
             Data should only be disclosed in situations where 1) Consent has been provided
             or 2) When there is a legal and appropriate need for disclosure.
             3) Data subjects have knowingly made their own identifiable data public. (2)
            </ListGroup.Item>
            <ListGroup.Item>
              Data sustainability is encouraged, where in accordance with the data subject's
              consent and the relevant laws, data should be retained for future
              processing through archiving, indexing, and retrieval systems. (2)
            </ListGroup.Item>
            <ListGroup.Item>
              Data breaches should be reported to the organization's data steward without undue delay.
              Additionally, they should be reported to the competent supervisory authority, data
              protection officer and relevant research ethics committee. (2)
            </ListGroup.Item>
            <ListGroup.Item>
              Additional mechanisms should be considered to address cases of compelled disclosure
              by state authorities. (2)
            </ListGroup.Item>
            <ListGroup.Item>
              Requests for data should be able to demonstrate at least:
                1) Legitimate purpose/interest/Use.
                2) Authorized accessibility to specific individuals.
                3) Reasonable and specific time period of data access.
                4) Destruction of data after use. (2)
            </ListGroup.Item>
            <ListGroup.Item>
              Organizations shall schedule internal and external security
              processes independently audited. Organizations should record and audit
              log of all security-related events. Where possible, audits and their documentations
              should be automated. Audit logs should be retained for at least a year
              or as specified by law. (2)
            </ListGroup.Item>
            <ListGroup.Item>
              Organizations shall schedule internal and external security processes
              independently audited. orhanizations should also record and audit log of
              all security-related events. Where possible, audits and their documentation shoudl
              be automated. Audit logs should be retained for at least a year or as
              specified by law. (2)
            </ListGroup.Item>
            <ListGroup.Item>
              Audits/Assessments should also assess data integrity and quality.
              Specifically, if data processing involves a vulnerable population.
              If practical, the organization should consider a vulnerable population-
              specific privacy impact assessment. (2)
            </ListGroup.Item>
          </ListGroup>
         </Card.Text>
        </Tab>
     </Tabs >
    </Card.Body>
  </Card>);
}

export const getCanadiandLaws = () => {
  return(
  <Tabs defaultActiveKey='accountability' id='uncontrolled-tab-example'>
  <Tab eventKey='accountability' title='Accountability'>
   <Card.Text style={{ paddingTop: '1%'}}>
     <ListGroup variant='flush'>
       <ListGroup.Item>
        ID Person with highest authority in public body or designate a person
        so they are accountable for the compliance of the organization with
        corresponding laws. (1,2,5)
       </ListGroup.Item>
       <ListGroup.Item>
        Implement procedures to receive and respond to complaints and inquiries from
        user/clients. (5)
       </ListGroup.Item>
       <ListGroup.Item>
        Implement/require practices/policies for training staff regarding the
        policies/practices of the organization, including those regardgin privacy/security. (5)
       </ListGroup.Item>
     </ListGroup>
    </Card.Text>
   </Tab>
   <Tab eventKey='law' title='Lawfulness of Use, Storage, Transfer and Protection'>
    <Card.Text style={{ paddingTop: '1%'}}>
      <ListGroup variant='flush'>
        <ListGroup.Item>
         Contractual or other means should be used to provide comparable levels of
         protection while information is processed by a third party.
         The management of health informations is governed by specific rules of laws with which
         the contract has to comply, particularly with respect to security measures. (2,5)
        </ListGroup.Item>
        <ListGroup.Item>
         Execute a contract that determines the type of information being transferred or communicated,
         ID the purposes and scope of the use and transfer/communication, terms of confidentiality,
         and terms/measures of data protection. (1,5)
        </ListGroup.Item>
        <ListGroup.Item>
          Display clear terms of service stating the purpose, limitations and conditions associated with the use of the data,
          including for instance that coded or anonymized data shall not be re-identified. (1,5)
        </ListGroup.Item>
        <ListGroup.Item>
          Data shall be collected used, and disclosed by fair and lawful means and limited to the
          identified purposes. Details on collection, storage, and disclosure shall be informed.
          Before relasing to outside of the province, equivalent protection shall be ensured in the recipient's
          policies/practices. (1,2,5)
        </ListGroup.Item>
        <ListGroup.Item>
          Policies/Practices on the management of personal information shall be
          implemented and made readily available. (1,2,3,5)
        </ListGroup.Item>
        <ListGroup.Item>
        Personal information shall be as accurate, complete, and up-to-date
        as necessary. Everyone shall be able to request the correction of their personal information. (1,2,3,5)
        </ListGroup.Item>
        <ListGroup.Item>
        An inventory shall be kept with info pertaining the content and protection measures. (1)
        </ListGroup.Item>
      </ListGroup>
     </Card.Text>
    </Tab>
    <Tab eventKey='security' title='Security and Safeguards'>
     <Card.Text style={{ paddingTop: '1%'}}>
       <ListGroup variant='flush'>
         <ListGroup.Item>
           Reasonable security measures to ensure the protection of personal information
           shall be implemented based on the sensitivity of the information, the purposes
           for which it is used, the quantity and distribution, and the medium on which it is stored.
           They shall be against theft, loss, damage, unauthorized access, disclosure, copying,
           modification or use. They can be physical, organizational or technological. (1,2,3,5)
         </ListGroup.Item>
         <ListGroup.Item>
           Technological measures can include: coding, de-identification, encryption,
          anonymization, firewalls; physical measures can include: locked filing cabinets
          and restricted access to offices; and administrative/organizational measures can include:
          security clearances and limited access on need-to-know basis. (1,2,3,5)
         </ListGroup.Item>
         <ListGroup.Item>
            Data security breaches shall be reported to the Commissioner
            if believed to create real risk of significant harm
            (bodily harm, humiliation, damage to reputation or relationship,
            loss of employment, business or professional opportunities,
            financial loss, identity theft, negative effects on credit,
            damage or loss of property) to an individual. (2,5)
         </ListGroup.Item>
         <ListGroup.Item>
           Organizations shall keep a record of every breach of data security.
           Have response mechanisms in case of data breach, including who to inform or report.
           Record keeping shall include: type of event, data/time,
           success/failure, origin, data/system/resources affected. (5)
         </ListGroup.Item>
         <ListGroup.Item>
           Data Access committee to assess the data recipient/user and the intended use.
           Execute a data access contract that that determines the type of information
           being transferred or communicated, ID the purposes and scope of the transfer/communication,
           terms of confidentiality, and terms/measures of data protection. (1,5)
         </ListGroup.Item>
         <ListGroup.Item>
         Display clear terms of service stating the purpose, limitations and
         conditions associated with the use of the data, including for instance
         that coded or anonymized data shall not be re-identified. (1,5)
         </ListGroup.Item>
         <ListGroup.Item>
         Organizations may be audited by a higher institutions to verify the
         practices/policies of management of personal information. (1,2,5)
         </ListGroup.Item>
         <ListGroup.Item>
         Regularity and extent of audits has an impact on the grant/renewal
        of organizations' acreditation. (3)
         </ListGroup.Item>
       </ListGroup>
      </Card.Text>
     </Tab>
  </Tabs >);
}

export const getLawCards = () => {
  return(
    <div style={{ float: 'left', display: 'flex', paddingBottom: '2%'}}>
    <Row>
      <Col lg={4} style={{ paddingBottom: '1%' }} >
        <Card border='success'  style={{ width: '100%' }}>
          <Card.Header>(1)</Card.Header>
            <Card.Body>
              <Card.Text>
                Act Respecting Access to Documents held by Public Bodies
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} style={{ paddingBottom: '1%' }} >
          <Card border='success' style={{ width: '100%' }}>
            <Card.Header>(2)</Card.Header>
              <Card.Body>
                <Card.Text>
                  Act Respecting the Sharing of Certain Health Information
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col lg={4} style={{ paddingBottom: '1%' }} >
          <Card border='success'  style={{ width: '100%' }}>
            <Card.Header>(3)</Card.Header>
              <Card.Body>
                <Card.Text>
                  Act to Establish a Legal Framework for Information Technology
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col lg={4} style={{ paddingBottom: '1%' }} >
          <Card border='success' style={{ width: '100%' }}>
            <Card.Header>(4)</Card.Header>
              <Card.Body>
                <Card.Text>
                  Act Respecting Healthcare Services and Social Services
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col lg={4} style={{ paddingBottom: '1%' }} >
          <Card border='success' style={{ width: '100%' }}>
            <Card.Header>(5)</Card.Header>
              <Card.Body>
                <Card.Text>
                  PIPEDA Principles
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export const getBestPracticesCards = () => {
  return(
    <div style={{ float: 'left', display: 'flex', paddingBottom: '2%'}}>
    <Row>
      <Col lg={4} style={{ paddingBottom: '1%' }}>
        <Card border='warning' style={{ width: '100%' }}>
          <Card.Header>(1)</Card.Header>
            <Card.Body>
              <Card.Text>
                GA4GH Framework
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} style={{ paddingBottom: '1%' }}>
          <Card border='warning' style={{ width: '100%' }}>
            <Card.Header>(2)</Card.Header>
              <Card.Body>
                <Card.Text>
                  GA4GH Data Privacy and Security Policy
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col lg={4} style={{ paddingBottom: '1%' }}>
          <Card border='warning' style={{ width: '100%' }}>
            <Card.Header>(3)</Card.Header>
              <Card.Body>
                <Card.Text>
                  GA4GH Data Security Infrastructure Policy
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col lg={4} style={{ paddingBottom: '1%' }}>
          <Card border='warning' style={{ width: '100%' }}>
            <Card.Header>(4)</Card.Header>
              <Card.Body>
                <Card.Text>
                  IHEC
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col lg={4} style={{ paddingBottom: '1%' }}>
          <Card border='warning' style={{ width: '100%' }}>
            <Card.Header>(5)</Card.Header>
              <Card.Body>
                <Card.Text>
                  ISO 27799 & 27001
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>

    </div>
  )
}
