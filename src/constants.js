/*
 * constants.js
 */


export const LOCATION = {
  CAN: 'Canada',
  USA: 'United States',
  EU: 'Europe',
  NON_EU: 'Rest of the World',
}

export const USER_TYPE = {
  STEWARD: 'steward/user',
  DONOR: 'donor',
}

export const INFO_TYPE = {
  DIRECTLY: 'directly identifiable',
  INDIRECTLY: 'indirectly identifiable',
  ANONYMIZED: 'anonymized',
  ANONYMOUS: 'anonymous',
  CODED: 'coded'
}

//** Ask provincial and then depending on the province display 'refer to the law that applies'
//*** Just display the law that applies
// FWUB JUST REFER TO PIPEDA

export const PROCESSOR = {
  FED: {
    body: 'Federal Government',
    laws: ['Privacy Act', 'Treasury Board of Canada Secretariat’s policies and guidance'], //***
    provincial: false
  },
  PRIV_COMM: {
    body: 'Private Organization & Commercial',
    laws: ['PIPEDA'], //**
    provincial: true
  },
  FWUB: {
    body: 'FWUB',
    laws: ['PIPEDA'], //Refer to PIPEDA
    provincial: false
  },
  PROV_GOV: {
    body: 'Provincial Government Institution',
    laws: ['Provincial Personal Information Protection Law for Public Bodies'], //**
    provincial: true
  },
  MUSH: {
    body: 'MUSHs',
    laws: ['Provincial Personal and Health Information Protection Law'], //**
    provincial: true
  },
  HEALTH: {
    body: 'Healthcare Professionals',
    laws: ['Provincial laws for Healthcare Professionals'], //**
    provincial: true
  },
  NON_COMM: {
    body: 'Individuals & Non-Commercial',
    laws: ['Privacy laws do NOT apply'], //***
    provincial: false
  } ,
}


export const PROVINCES = {
  ALB: {
    name: 'Alberta',
    laws: ['Freedom of Information and Protection Privacy Act', 'Personal Information Protection Act', 'Health Information Act']
  },
  BC: {
    name: 'British Columbia',
    laws: ['Freedom of Information and Protection Privacy Act', 'Personal Information Protection Act', 'E-Health (Personal Health Information Access and Protection of Privacy)']
  },
  MAN: {
    name: 'Manitoba',
    laws: ['Freedom of Information and Protection Privacy Act', 'Personal Information Protection Act', 'Privacy law relating to health records']
  },
  NB: {
    name: 'New Brunswick',
    healthLaw: ['Personal Health Information Privacy and Access Act'],
    laws: ['Right to information and Protection of Privacy Act', 'Personal Health Information Privacy and Access Act']
  },
  NL: {
    name: 'Newfoundland and Labrador',
    healthLaw: ['Personal Health Information Act'],
    laws: ['Access to Information and Protection of Privacy Act', 'Personal Health Information Act']
  },
  NT: {
    name: 'Northwest Territories',
    laws: ['Access to Information and Protection of Privacy Act', 'Health Information Act']
  },
  NS: {
    name: 'Nova Scotia',
    healthLaw: ['Personal Health Information Act'],
    laws: ['Freedom of Information and Protection Privacy Act', 'Personal Health Informatio Act', 'Part XX of the Municipal Government Act ']
  },
  NUN: {
    name: 'Nunavut',
    laws: ['Freedom of Information and Protection Privacy Act']
  },
  ON: {
    name: 'Ontario',
    healthLaw: ['Personal Health Information Protection of Privacy Act'],
    laws: ['Freedom of Information and Protection Privacy Act', 'Municipal Freedom of Information and Protection of Privacy Act', 'Personal Health Information Protection of Privacy Act']
  },
  PE: {
    name: 'Prince Edward Island',
    laws: ['Freedom of Information and Protection Privacy Act']
  },
  QC: {
    name: 'Quebec',
    privateLaw: ['Act Respecting the Protection of Personal Information in the Private Sector'],
    laws: ['Act Respecting Access to Documents Held by Public Bodies and the Protection of Personal Information', 'Act Respecting the Protection of Personal Information in the Private Sector', 'Act Respecting Health Services and Social Services', 'Health Insurance Act', 'Act Respecting the Régie de l\'Assurance Maladie du Québec']
  },
  SAS: {
    name: 'Saskatchewan',
    laws: ['Freedom of Information and Protection Privacy Act', 'Health Information Protection Act']
  },
  YUK: {
    name: 'Yukon',
    laws: ['Access to information and Protection of Privacy Act', 'Health Information Privacy and Management Act']
  }
}
