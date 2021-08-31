import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Card} from 'react-bootstrap';
import Icon from 'react-fontawesome';

class AboutUs extends Component {
  render() {
    return (
      <Container>
        <div>
          <Jumbotron>
            <h1 className='text-center' style={{ fontSize: '45px', fontWeight: '300', marginBottom: '1em' }}>
              About Us
            </h1>
            <Card>
              <Card.Header as="h5"> What is D-PATH?</Card.Header>
              <Card.Body>
                <Card.Text>
                The Data Privacy Assessment Tool for Health (D-PATH) is an online tool to help researchers who collect, store, own, manage or use health data, get started in the process of meeting the applicable ethical, legal, professional requirements associated with the protection of those data’s privacy and, with this, enable responsible data sharing practices.
                D-PATH was developed in the context of the EpiShare project https://epishare-project.org/news.html This means that it was created with the purpose of enabling responsible data sharing practices with respect to privacy for the scientists using EpiShare. Since EpiShare is a project based in McGill University (Montreal, Canada), the initial design of D-PATH focuses primarily on Canadian law and specifically on Quebec law. However, since D-PATH is intended to become a tool for Global Alliance for Genomics and Health (GA4GH) and therefore have a broader platform of users, we are expanding it to other provinces of Canada and if necessary, to some of the most common jurisdictions.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5"> What D-PATH is not?</Card.Header>
              <Card.Body>
                <Card.Text>
                  D-PATH is NOT a tool that provides legal or other professional advice. Users of D-PATH are therefore advised and encouraged to seek proper legal advice to ensure their activities of management and sharing are lawful and fully compliant with the applicable law.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5"> What does D-PATH do? </Card.Header>
              <Card.Body>
                <Card.Text>
                Based on the specific responses given by the user to the series of questions posed, D-PATH provides a reference to the privacy law(s) and/or best practices likely to be applicable to them and a list of the most relevant obligations that the user should comply with. The privacy obligations that D-PATH displays are classified in three categories: <br/>
                  1. Accountability <br/>
                  2. Lawfulness of use, storage, transfer, and protection <br/>
                  3. Security and safeguards. <br/>
                  Each of the obligations listed includes references to the specific documents that provide them. The list is displayed in the online tool organized by jurisdiction in separate sections.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">	What is D-PATH’s path? (simple step by step) </Card.Header>
              <Card.Body>
                <Card.Text>
                1.	D-PATH’s assessment is built on the answers given to sets of simple lay format questions. Each question is made in a multiple-choice format. Most choices have a definition attached to them in order to facilitate the answering process. <br/>
                2.	It starts with questions about the type of activities in which the user engages with the data. In other words, the questions address the relationship that the user has with the data. Depending on their answers, users will be firstly categorized as data processors, data recipients or data donors.<br/>
                3.	The next set of questions are reserved for those who are considered data processors. These questions focus on locations: processor, project, storage, data users.<br/>
                4.	Then, the tool asks an additional set of questions about the nature of the data being processed, which is determined by the data’s level of identifiability. The purpose of these additional questions is to determine whether the data that the user is processing is considered personal.<br/>
                5.	When the location selected for the processor, project or storage is Canada, D-PATH continues with further questions about the legal nature of the processor.<br/>
                6.	At the end of its analysis, D-PATH provides a list the privacy law(s) and/or best practices likely to be applicable and the most relevant obligations that need to be complied with. The list is displayed in the online tool organized by jurisdiction in separate sections. The tool also gives the user the option to display and download or print the list of obligations in a pdf format. Since, D-PATH’s analysis is mainly focused on Canada’s and more thoroughly Quebec’s privacy legal system, the list of potentially applicable laws and of the obligations is more specific to that jurisdiction.<br/>

                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5"> Who created D-PATH? </Card.Header>
              <Card.Body>
                <Card.Text>
                D-PATH was created by a multidisciplinary team. One branch comprises legal, social, and ethical researchers with expertise on bioethics and privacy in the field of genomics and biomedicine. We are affiliated to the Centre of Genomics and Policy https://www.genomicsandpolicy.org/. The other branch is composed of experts in bioinformatics analysis and HPC services for the life science research community https://www.computationalgenomics.ca. Both branches of the team are part of McGill University, in Montréal, Québec, Canada. <br/>
                  • Yann Joly (Principal Investigator) <br/>
                  • Guillaume Bourque (Principal Investigator) <br/>
                  • Palmira Granados Moreno <br/>
                  • Sebastian Ballesteros Ramirez <br/>
                  • Hanshi Liu <br/>
                  • Michael Beauvais <br/>
                  • Hortense Gallois <br/>
                  • Elena Olvera <br/>
                  • David Bujold <br/>
                  • Ksenia Zaytseva <br/>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5"> How was D-PATH created? </Card.Header>
              <Card.Body>
                <Card.Text>
                D-PATH’s interface is written in JavaScript along with the React Library. Its source code is made available at https://github.com/bento-platform/d-path under the Apache 2.0 free software license. A copy of the license can be found in https://www.apache.org/licenses/LICENSE-2.0 or here under the tab entitled License.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5"> Partners and Sponsors </Card.Header>
              <Card.Body>
                <img
                  alt='genome-canada'
                  src={require('./media/genome-canada-logo.png')}
                  style={{
                    height: 200,
                    marginLeft: 80,
                  }}
                />
                <img
                  alt='genome-quebec'
                  src={require('./media/genome-quebec-logo.png')}
                  style={{
                    height: 220,
                  }}
                />
                <img
                  alt='cihr'
                  src={require('./media/cihr-logo.jpeg')}
                  style={{
                    height: 250,
                    marginLeft:280
                  }}
                />
              </Card.Body>
            </Card>
            <div className='text-center' style={{marginTop: '1rem'}}>
              <Link to='/' className='btn btn-primary btn-lg'>
              <Icon name="home"/>    Back
              </Link>
            </div>
          </Jumbotron>
        </div>
      </Container>
    );
  }
}

export default AboutUs;
