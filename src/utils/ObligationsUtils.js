import React from 'react';
import {Card, ListGroup, Tabs, Tab, Col, Row} from 'react-bootstrap';
import cx from 'classnames';
import {bestPracticesText, bestPracticesCardsText, quebecLawsText, quebecLawCardsText, euroLawsText} from './TextLawsUtils';
import { PROCESSOR } from '../constants';

const bestPracticeTabs = [
  {
    key: 'accountability',
    title: 'Accountability',
    items: bestPracticesText.accountability,
  },
  {
    key: 'law',
    title: 'Lawfulness of Use, Storage, Transfer and Protection',
    items: bestPracticesText.law,
  },
  {
    key: 'security',
    title: 'Security and Safeguards',
    items: bestPracticesText.security,
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

  const createText = (text) => {
    return (
      <h3 style={{marginTop: '20px', marginBottom: '20px'}}>
        {text}
      </h3>
    );
  }

  const getOtherCountries = () => {
    const { locations } = props;
    const valuesToRemove = ["Canada", "Europe", "United States"];
    return Array.from(new Set(locations.filter((i) => !valuesToRemove.includes(i))));
  }

  return(
    <>
        {includesCanada && assessment.province==='Quebec' && getQuebecLaws(props) }
        {includesCanada && assessment.province!=='Quebec' && assessment.processor !== PROCESSOR.NON_COMM &&
          createText(`• Please refer to the
            ${assessment.processor.laws} Legislation of
            ${(assessment.province) ? assessment.province : 'Canada'}`)
        }
        {includesCanada && assessment.processor === PROCESSOR.NON_COMM &&
          createText(`• Privacy laws do NOT apply. `)
        }
        {includesEU && getEuropeanLaws() }
        {includesUS &&
          createText('• Please refer to the US Legislation (HIPAA)')
        }
        {getOtherCountries().map(country => {
          return createText(`• Please refer to the Legislation of ${country}`)
         })
        }
      <hr/>
    </>
  );
}

export const getQuebecLaws = ({ onMouseEnter, onMouseLeave }) => {

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
    <Card>
      <Card.Body>
        <Tabs defaultActiveKey='accountability'>
          {lawTabs(quebecLawsText).map(renderTab)}
        </Tabs>
      </Card.Body>
    </Card>
  );
}

export const getLawCards = ({ activeLaws }) => {
  return (
    <div style={{ paddingBottom: '1em'}}>
      <h3> • Quebec Law </h3>
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

export const getEuropeanLaws = () => {
  const renderTab = tab =>
    <Tab key={tab.key} eventKey={tab.key} title={tab.title}>
      <Card.Text>
        <ListGroup variant='flush'>{tab.items.map((text) => <ListGroup.Item>{text}</ListGroup.Item>)}
        </ListGroup>
      </Card.Text>
    </Tab>

  return(<>
    <h3 style={{marginTop: '10px', marginBottom: '10px'}}> • European Laws - GDPR </h3>
    <Card>
      <Card.Body>
        <Tabs defaultActiveKey='accountability'>
          {lawTabs(euroLawsText).map(renderTab)}
        </Tabs>
      </Card.Body>
    </Card>
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
