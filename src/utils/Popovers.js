import React from 'react';
import { Popover, Tooltip} from 'react-bootstrap';

export const select = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Please select an option to continue.
  </Tooltip>
);

export const ConditionalWrapper = ({
    condition,
    wrapper,
    children,
}) => (condition ? wrapper(children) : children);


export const processor = (
  <Popover id='popover-basic'>
    <Popover.Title as='h3'>Data Processor</Popover.Title>
    <Popover.Content>
      Individual, entity or organization that either personally or through
      a project collects, records, organizes, structures, stores, adapts
      or alters, retrieves, consults, uses, discloses, transmits,
      disseminates or otherwise makes available, aligns, combines,
      restricts, erases or destroys data.
    </Popover.Content>
  </Popover>
);

export const recipient = (
  <Popover id='popover-basic'>
    <Popover.Title as='h3'>Data Recipient</Popover.Title>
    <Popover.Content>
      Any person to whom the data is disclosed in accordance with a data access
      agreement either open, controlled or registered.
      These are usually researchers, research centres or companies who
      will use the data for further research.
    </Popover.Content>
  </Popover>
);

export const donor = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Data Donor</Popover.Title>
      <Popover.Content>
        Refers to the individual whom the data is about.
      </Popover.Content>
    </Popover>
);

export const europe = (
  <Popover id='popover-basic'>
    <Popover.Title as='h3'>Europe</Popover.Title>
    <Popover.Content>
      It refers to the country members of the European Union and the European Economic Area
    </Popover.Content>
  </Popover>
);

export const directly = (
  <Popover id='popover-basic'>
    <Popover.Title as='h3'>Directly Identifiable</Popover.Title>
    <Popover.Content>
      Information that identifies a specific individual
      using direct identifiers (name, social insurance number, etc.)
    </Popover.Content>
  </Popover>
);

export const indirectly = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Indirectly Identifiable</Popover.Title>
      <Popover.Content>
        Information that in combination with indirect identifiers
        (date of birth or place of residence) can be reasonable expected to identify
        a specific human being.
      </Popover.Content>
    </Popover>
);

export const anonymized = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Anonymized</Popover.Title>
      <Popover.Content>
        Information that has been irrevocably stripped
        from direct identifiers.
      </Popover.Content>
    </Popover>
);

export const anonymous = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Anonymous</Popover.Title>
      <Popover.Content>
        Information that has never been identifiable
      </Popover.Content>
    </Popover>
);

export const coded = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Coded</Popover.Title>
      <Popover.Content>
        Information from which direct identifiers have been removed and have been
        replaced with a code. Access terms to this code will determine whether the
        information can identify and individual.
      </Popover.Content>
    </Popover>
);

export const identifiable = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Identifiable</Popover.Title>
      <Popover.Content>
        Information is deemed identifiable if it may reasonably be expected
        to identify an individual, when used alone or combined with other available
        information. Identifiability is a key component of personal information.
      </Popover.Content>
    </Popover>
);

export const publicInfo = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'>Public Information</Popover.Title>
        <Popover.Content>
          Personal information that has been legally made public
          (either because it is deemed public by law public or because the person
          to whom it is associated consented to it being public)
        </Popover.Content>
      </Popover>
);

export const commercialActivity = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'>Private individuals and organizations with commercial activities</Popover.Title>
        <Popover.Content>
          An association, a partnership or a person that engages in any particular transaction,
          act or conduct or any regular course of conduct that is of a commercial character, including the selling,
          bartering or leasing of donor, membership or other fundraising lists.
        </Popover.Content>
      </Popover>
);

export const fwub = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'>Federally regulated businesses (FWUB)</Popover.Title>
        <Popover.Content>
          Organizations that devote to: airports or air transportation;
          banking; broadcasting; canals, pipelines, tunnels, and bridges certain deferal Crown
          agencies; certain First Nations activities; fisheries; grain handling; highway and railway transportation;
          marine shipping, ferry, and port services; private corporations necessary to the operation of a federal Act;
          telecommunications; and uranium mining and processing.
        </Popover.Content>
      </Popover>
);

export const mush = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'>Municipalities, public universities, public schools and public hospitals</Popover.Title>
        <Popover.Content>
          MUSH are usually governed by provincial laws. In Quebec, school bodies (e.g. general
          and vocational colleges and specific university institutions) the health services and social services
          institutions are public bodies. PIPEDA applies only in certain situations. Nevertheless, the principles
          contained in PIPEDA mauy be used by institutions such as schoolsm universities, hospitals and service providers
          in the protection of all personal information.
        </Popover.Content>
      </Popover>
);

export const healthcare = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'>Healthcare Professionals</Popover.Title>
        <Popover.Content>
          Healthcare professionals include for example doctors, dentists,
          and physiotherapists, and psychologists.
        </Popover.Content>
      </Popover>
);

export const healthInfo = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'> Personal Health Information </Popover.Title>
        <Popover.Content>
          Information of a living or deceased natural person concerning their physical
          or mental health, any health service provided to them, donation of body parts
          or bodily substance of that natural person or information derived from the testing
          or examination of a body part or bodily substance of that natural person, information collected in the course of
          providing health sevices to that narual person or information collected incidentally
          to the provision of health services to the natural person.
        </Popover.Content>
      </Popover>
);

export const behaviour = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'> Monitored Behaviour </Popover.Title>
        <Popover.Content>
          An example would be when your study aims to investigate the lifestyle of individuals located in the EU or the genetic ancestry of EU descendants.
        </Popover.Content>
      </Popover>
);

export const goods = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'> Goods and Services </Popover.Title>
        <Popover.Content>
          An example would be offering any kind of genetic testing or genome sequencing where you are expected to return results to the individual located in the EU and you offered these services in an EU official language, charged in an EU currency or used an EU URL.
        </Popover.Content>
      </Popover>
);
