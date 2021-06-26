import React from 'react';
import {Card, ListGroup, Tabs, Tab, Col, Row, Accordion, Button, Alert} from 'react-bootstrap';
import cx from 'classnames';
import {newBestPracticesText, bestPracticesCardsText, quebecLawsText, quebecLawCardsText, euroLawsText} from './TextLawsUtils';
import { PROCESSOR, PROVINCES } from '../constants';
import { linkGDPR  } from './Link';

const bestPracticeTabs = [
  {
    key: 'accountability',
    title: 'Accountability',
    items: newBestPracticesText.accountability,
  },
  {
    key: 'law',
    title: 'Lawfulness of Use, Storage, Transfer and Protection',
    items: newBestPracticesText.law,
  },
  {
    key: 'security',
    title: 'Security and Safeguards',
    items: newBestPracticesText.security,
  },
]

const lawTabs = (lawText) =>[
  {
    key: 'accountability',
    title: 'Accountability',
    items: lawText.accountability,
  },
  {
    key: 'law',
    title: 'Lawfulness of Use, Storage, Transfer and Protection',
    items: lawText.law,
  },
  {
    key: 'security',
    title: 'Security and Safeguards',
    items: lawText.security,
  },
]


export const getLaws = (props) => {
  const { locations, assessment } = props;
  const includesCanada = locations.includes('Canada');
  const includesEU = locations.includes('Europe');
  const includesUS = locations.includes('United States');


  const accordion = (text) =>{
    return(
        <Accordion.Collapse eventKey="0">
          <Card.Body> {text} </Card.Body>
        </Accordion.Collapse>
    )
  }

  const getOtherCountries = () => {
    const { locations } = props;
    const valuesToRemove = ["Canada", "Europe", "United States"];
    return Array.from(new Set(locations.filter((i) => !valuesToRemove.includes(i))));
  }

  return(
    <>
        {console.log(assessment)}
        {includesCanada && assessment.province===PROVINCES.QC && getQuebecLaws(props, accordion) }
        {includesCanada && assessment.province!==PROVINCES.QC && assessment.processor.laws.includes('PIPEDA') &&
          <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Canadian Jurisdiction
              </Accordion.Toggle>
            </Card.Header>
              {assessment.processor.laws.map(law => {
                return accordion(`• Please refer to ${assessment.processor.laws}`)
              })}
            </Card>
            </Accordion>
        }
        {includesCanada && assessment.province!==PROVINCES.QC && assessment.processor !== PROCESSOR.NON_COMM && !assessment.processor.laws.includes('PIPEDA') &&
          <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Canadian Jurisdiction
              </Accordion.Toggle>
            </Card.Header>
              {assessment.processor.laws.map(law => {
                return accordion(`• Please refer to the
                  ${law} Legislation of
                  ${(assessment.province) ? assessment.province.name : 'Canada'}`)
              })}
            </Card>
            </Accordion>
        }
        {includesCanada && assessment.processor === PROCESSOR.NON_COMM &&
          <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Canadian Jurisdiction
              </Accordion.Toggle>
            </Card.Header>
              {  accordion(`• Privacy laws do NOT apply. `) }
            </Card>
            </Accordion>
        }
        {includesEU && getEuropeanLaws(accordion) }
        {includesUS &&
          <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                US Jurisdiction
              </Accordion.Toggle>
            </Card.Header>
              {  accordion('• Please refer to the US Legislation (HIPAA)') }
            </Card>
            </Accordion>
        }
        { getOtherCountries().length !== 0 && getOtherCountriesLaws(getOtherCountries(), accordion)}

      <hr/>
    </>
  );
}

const getOtherCountriesLaws = (countries, accordion) => {
  return(
    <Accordion defaultActiveKey="0">
     <Card>
       <Card.Header>
         <Accordion.Toggle as={Button} variant="link" eventKey="0">
           Other Jurisdictions
         </Accordion.Toggle>
       </Card.Header>
         {countries.map(country => {
           return accordion(`• Please refer to the Privacy Legislation of ${country}`)
         })}
     </Card>
     </Accordion>
  )

}

export const getQuebecLaws = ({ onMouseEnter, onMouseLeave}, accordion) => {

  const textToItem = text =>
    <ListGroup.Item
      onMouseEnter={enterHandler(text, onMouseEnter)}
      onMouseLeave={leaveHandler(text, onMouseLeave)}
    >
      {text}
    </ListGroup.Item>

  const renderTab = tab =>
    <Tab key={tab.key} eventKey={tab.key} title={tab.title}>
      <Card.Text>
        <ListGroup variant='flush'>{tab.items.map(textToItem)}</ListGroup>
      </Card.Text>
    </Tab>

  return (
    <Accordion defaultActiveKey="0">
     <Card>
       <Card.Header>
         <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Quebec Law
         </Accordion.Toggle>
       </Card.Header>
       {accordion(
        <div>
          <Card>
            <Card.Body>
              <Tabs defaultActiveKey='accountability'>
                {lawTabs(quebecLawsText).map(renderTab)}
              </Tabs>
            </Card.Body>
          </Card>
         </div>
         )}
     </Card>
    </Accordion>
  );
}

export const getLawCards = ({ activeLaws }) => {
  return (
    <div style={{ paddingBottom: '1em'}}>
      <Row>
        {quebecLawCardsText.map((card, i) => {
          const number = i + 1
          return(
            <Col lg={4} style={{ paddingBottom: '1%' }}>
              <Card
                className={cx('ObligationCard', {
                  'ObligationCard--active': activeLaws.includes(i)
                })}
              >
                <Card.Body>
                  <div className='ObligationCard__number'>
                    {number}
                  </div>
                  <Card.Text>
                    {card}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>)
        })}
      </Row>
    </div>
  )
};

export const getEuropeanLaws = (accordion) => {
  const renderTab = tab =>
    <Tab key={tab.key} eventKey={tab.key} title={tab.title}>
      <Card.Text>
        <ListGroup variant='flush'>{tab.items.map((text) => <ListGroup.Item>{text}</ListGroup.Item>)}
        </ListGroup>
      </Card.Text>
    </Tab>

  return(<>
    <Accordion defaultActiveKey="0">
     <Card>
       <Card.Header>
         <Accordion.Toggle as={Button} variant="link" eventKey="0">
           European Laws - GDPR
         </Accordion.Toggle>
       </Card.Header>
        {accordion(
         <div>
           <Card>
             <Card.Body>
               <Tabs defaultActiveKey='accountability'>
                 {lawTabs(euroLawsText).map(renderTab)}
               </Tabs>
             </Card.Body>
           </Card>
          </div>
          )}
         </Card>
         <Alert variant='warning'> We also invite you to {linkGDPR} which analyzes the General Data Protection Regulation (GDPR) for the genomics community. </Alert>
     </Accordion>
  </>);
};

export const getBestPracticesCards = ({ activeBestPractices }) => {
  return(
    <div className='bestPracticesCards' style={{ paddingBottom: '1em'}}>
      <Row>
        {bestPracticesCardsText.map((card, i) => {
          return(
            <Col lg={4} style={{ paddingBottom: '1%' }}>
              <Card
                className={cx('ObligationCard', {
                  'ObligationCard--active': activeBestPractices.includes(i)
                })}
              >
                <Card.Body>
                  <div className='ObligationCard__number'>
                    {i + 1}
                  </div>
                  <Card.Text>
                    {card}
                  </Card.Text>
                </Card.Body>
                </Card>
              </Col>)
        })}
      </Row>
    </div>
  )
}

export const getBestPractices = ({ onMouseEnter, onMouseLeave }) => {
  const textToItem = text =>
    <ListGroup.Item
      onMouseEnter={enterHandler(text, onMouseEnter)}
      onMouseLeave={leaveHandler(text, onMouseLeave)}
    >
      {text}
    </ListGroup.Item>

  const renderTab = tab =>
    <Tab key={tab.key} eventKey={tab.key} title={tab.title}>
      <Card.Text>
        <ListGroup variant='flush'>{tab.items.map(textToItem)}</ListGroup>
      </Card.Text>
    </Tab>

  return (
    <Card className='ObligationPanel'>
      <Card.Body>
        <Tabs style={{'color': 'black'}} defaultActiveKey='accountability'>
          {bestPracticeTabs.map(renderTab)}
        </Tabs>
      </Card.Body>
    </Card>
  );
}


// Helpers

function parseIndexes(text) {
  const m = text.match(/\((.*)\) *$/)
  if (!m)
    return []
  const indexes = m[1].replace(/ /g, '').split(',').map(n => parseInt(n, 10) - 1)
  return indexes
}

function enterHandler(text, onMouseEnter) {
  return () => onMouseEnter(parseIndexes(text))
}

function leaveHandler(text, onMouseLeave) {
  return () => onMouseLeave(parseIndexes(text))
}
