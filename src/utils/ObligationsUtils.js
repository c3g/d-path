import React from 'react';
import {Card, ListGroup, Tabs, Tab, Col, Row} from 'react-bootstrap';
import cx from 'classnames';
import {bestPracticesText, bestPracticesCardsText, lawsText, lawCardsText} from './TextLawsUtils';

const createCard = (text) => {
  return (
    <Card.Body>
     {text}
    </Card.Body>
  );
}

const createText = (text) => {
  return (
    <Card.Header className='text-center'>
      <h5>{text}</h5>
    </Card.Header>
  );
}

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



export const getLaws = (props) => {
  const { locations } = props;
  return(
    <>
      <Card  className='ObligationPanel'>
        {locations.includes('Canada') && createCard(getCanadiandLaws(props)) }
        {locations.includes('Europe') &&  createText('Please refer to the Obligations and Requirements of the GDPR') }
        {locations.includes('United States') && createText('Please refer to the US Legislation (HIPAA)')  }
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


  return (
    <Tabs defaultActiveKey='accountability'>
      <Tab eventKey='accountability' title='Accountability'>
        <Card.Text>
          <ListGroup variant='flush'>
            {lawsText.accountability.map(textToItem)}
          </ListGroup>
        </Card.Text>
      </Tab>
      <Tab eventKey='law' title='Lawfulness of Use, Storage, Transfer and Protection'>
        <Card.Text>
          <ListGroup variant='flush'>
            {lawsText.law.map(textToItem)}
          </ListGroup>
        </Card.Text>
      </Tab>
      <Tab eventKey='security' title='Security and Safeguards'>
        <Card.Text>
          <ListGroup variant='flush'>
            {lawsText.security.map(textToItem)}
          </ListGroup>
        </Card.Text>
      </Tab>
    </Tabs>
  );
}

export const getLawCards = ({ activeLaws }) => {
  return(
    <>
      <h3 className='obligationTitle'>Laws and Policies</h3>

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
    </>
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

  return(
    <Card className='ObligationPanel'>
      <Card.Body>
        <Tabs defaultActiveKey='accountability'>
          <Tab eventKey='accountability' title='Accountability'>
            <Card.Text>
              <ListGroup variant='flush'>
                {bestPracticesText.accountability.map(textToItem)}
              </ListGroup>
            </Card.Text>
          </Tab>
          <Tab eventKey='law' title='Lawfulness of Use, Storage, Transfer and Protection'>
            <Card.Text>
              <ListGroup variant='flush'>
                {bestPracticesText.law.map(textToItem)}
              </ListGroup>
            </Card.Text>
          </Tab>
          <Tab eventKey='security' title='Security and Safeguards'>
            <Card.Text>
              <ListGroup variant='flush'>
                {bestPracticesText.security.map(textToItem)}
              </ListGroup>
            </Card.Text>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}
