import React from 'react';
import {Card, ListGroup, Tabs, Tab, Col, Row} from 'react-bootstrap';
import {bestPracticesText, bestPracticesCardsText, lawsText, lawCardsText} from './TextLawsUtils';

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
  return(
  <>
    <Card>
       { (locations.includes('Canada')) && createCard(getCanadiandLaws()) }
       { (locations.includes('Europe')) &&  createText('Please refer to the Obligations and Requirements of the GDPR') }
       { (locations.includes('United States')) && createText('Please refer to the US Legislation (HIPAA)')  }
    </Card>
    <hr/>
  </>
  );
}

export const getBestPractices = () => {
  return(<Card>
    <Card.Body>
     <Tabs defaultActiveKey='accountability' id='uncontrolled-tab-example'>
     <Tab eventKey='accountability' title='Accountability'>
      <Card.Text style={{ paddingTop: '1%'}}>
        <ListGroup variant='flush'>
          {bestPracticesText.accountability.map(item => {
            return(
              <ListGroup.Item>
              {item}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
       </Card.Text>
      </Tab>
      <Tab eventKey='law' title='Lawfulness of Use, Storage, Transfer and Protection'>
       <Card.Text style={{ paddingTop: '1%'}}>
         <ListGroup variant='flush'>
         {bestPracticesText.law.map(item => {
           return(
             <ListGroup.Item>
             {item}
             </ListGroup.Item>
           );
         })}
         </ListGroup>
        </Card.Text>
       </Tab>
       <Tab eventKey='security' title='Security and Safeguards'>
        <Card.Text style={{ paddingTop: '1%'}}>
          <ListGroup variant='flush'>
        {bestPracticesText.security.map(item => {
          return(
            <ListGroup.Item>
            {item}
            </ListGroup.Item>
          );
        })}
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
       {lawsText.accountability.map(item => {
         return(
           <ListGroup.Item>
           {item}
           </ListGroup.Item>
         );
       })}
     </ListGroup>
    </Card.Text>
   </Tab>
   <Tab eventKey='law' title='Lawfulness of Use, Storage, Transfer and Protection'>
    <Card.Text style={{ paddingTop: '1%'}}>
      <ListGroup variant='flush'>
        {lawsText.law.map(item => {
          return(
            <ListGroup.Item>
            {item}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
     </Card.Text>
    </Tab>
    <Tab eventKey='security' title='Security and Safeguards'>
     <Card.Text style={{ paddingTop: '1%'}}>
       <ListGroup variant='flush'>
         {lawsText.security.map(item => {
           return(
             <ListGroup.Item>
             {item}
             </ListGroup.Item>
           );
         })}
       </ListGroup>
      </Card.Text>
     </Tab>
  </Tabs >);
}

export const getLawCards = () => {
  return(
    <>
      <h3 className='obligationTitle'>Laws and Policies</h3>

      <div style={{ paddingBottom: '1em'}}>
        <Row>
          {lawCardsText.map((card, i) => {
            const number = i + 1
            return(
              <Col lg={4} style={{ paddingBottom: '1%' }}>
                <Card className='ObligationCard'>
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

export const getBestPracticesCards = () => {
  return(
    <div className='bestPracticesCards' style={{ paddingBottom: '1em'}}>
      <Row>
        {bestPracticesCardsText.map((card, i) => {
          return(
            <Col lg={4} style={{ paddingBottom: '1%' }}>
              <Card className='ObligationCard'>
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
