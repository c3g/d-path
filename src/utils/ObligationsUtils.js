import React from 'react';
import {Card, ListGroup, Tabs, Tab, Col, Row} from 'react-bootstrap';
import cx from 'classnames';
import {bestPracticesText, bestPracticesCardsText, lawsText, lawCardsText} from './TextLawsUtils';

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

const lawTabs = [
  {
    key: 'accountability',
    title: 'Accountability',
    items: lawsText.accountability,
  },
  {
    key: 'law',
    title: 'Lawfulness of Use, Storage, Transfer and Protection',
    items: lawsText.law,
  },
  {
    key: 'security',
    title: 'Security and Safeguards',
    items: lawsText.security,
  },
]


export const getLaws = (props) => {
  const { locations } = props;

  const createText = (text) => {
    return (
      <Card.Header className='text-center'>
        <h5>{text}</h5>
      </Card.Header>
    );
  }

  return(
    <>
      <Card  className='ObligationPanel'>
        {locations.includes('Canada') && <Card.Body>{getCanadiandLaws(props)}</Card.Body> }
        {locations.includes('Europe') &&
          createText('Please refer to the Obligations and Requirements of the GDPR')
        }
        {locations.includes('United States') &&
          createText('Please refer to the US Legislation (HIPAA)')
        }
      </Card>
      <hr/>
    </>
  );
}

export const getCanadiandLaws = ({ onMouseEnter, onMouseLeave }) => {

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
    <Tabs defaultActiveKey='accountability'>
      {bestPracticeTabs.map(renderTab)}
    </Tabs>
  );
}

export const getLawCards = ({ activeLaws }) => {
  return (
    <div style={{ paddingBottom: '1em'}}>
      <Row>
        {lawCardsText.map((card, i) => {
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
}

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
        <Tabs defaultActiveKey='accountability'>
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
