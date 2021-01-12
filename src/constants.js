/*
 * constants.js
 */


export const LOCATION = {
  CAN: 'Canada',
  USA: 'United States',
  EU: 'Europe',
  NON_EU: 'Non-Europe',
}

export const USER_TYPE = {
  PROCESSOR: 'processor',
  RECIPIENT: 'recipient',
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
    laws: ['Privacy Act'], //***
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
    body: 'Healthcare',
    laws: ['Provincial Law'], //**
    provincial: true
  },
  NON_COMM: {
    body: 'Individuals & Non-Commercial',
    laws: ['Privacy laws do NOT apply'], //***
    provincial: false
  } ,
}

export const PROVINCES = {
  ALB: 'Alberta',
  BC: 'British Columbia',
  MAN: 'Manitoba',
  NB: 'New Brunswick',
  NL: 'Newfoundland and Labrador',
  NT: 'Northwest Territories',
  NS: 'Nova Scotia',
  NUN: 'Nunavut',
  ONT: 'Ontario',
  PE: 'Prince Edward Island',
  QC: 'Quebec',
  SAS: 'Saskatchewan',
  YUK: 'Yukon'
}
