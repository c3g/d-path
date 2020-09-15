import React from 'react';
import { Popover} from 'react-bootstrap';

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

export const directly = (
  <Popover id='popover-basic'>
    <Popover.Title as='h3'>Directly Identifiable</Popover.Title>
    <Popover.Content>
      Information that <strong>identifies a specific individual </strong>
      using direct identifiers (name, social insurance number, etc.)
    </Popover.Content>
  </Popover>
);

export const indirectly = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Indirectly Identifiable</Popover.Title>
      <Popover.Content>
        Information that <strong>in combination with indirect identifiers</strong>
        (date of birth or place of residence) can be reasonable expected to identify
        a specific human being.
      </Popover.Content>
    </Popover>
);

export const publicInfo = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'>Public Information</Popover.Title>
        <Popover.Content>
          Personal information that has been legally made public has no reasonable
          expectation of privacy. Public personal information is not protected
          to the same degree as that one that has reasonable expectation of privacy.
        </Popover.Content>
      </Popover>
);

export const commercialActivity = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'>Commercial Activity</Popover.Title>
        <Popover.Content>
          Commercial activity is defined as any particular transaction, act or
          conduct or any regular course of conduct that is of a commercial character,
          including the selling, bartering or leasing of donor, membership or other
          fundraising lists.
        </Popover.Content>
      </Popover>
);

export const fwub = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'>Federally regulated businesses (FWUB)</Popover.Title>
        <Popover.Content>
          Organizations include those that devote to: airports or air transportation;
          banking; broadcasting; canals, pipelines, tunnels, and bridges certain deferal Crown
          agencies; certain First Nations activities; fisheries; grain handling; highway and railway transportation;
          marine shipping, ferry, and port services; private corporations necessary to the operation of a federal Act;
          telecommunications; and uranium mining and processing.
        </Popover.Content>
      </Popover>
);

export const mush = (
      <Popover id='popover-basic'>
        <Popover.Title as='h3'>Municipalities, universities, schools and hospitals</Popover.Title>
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
