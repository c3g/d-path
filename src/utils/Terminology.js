import React from 'react';
import {linkPrivacyAct, linkPIPEDA, linkGDPR2, linkIHEC, linkGA4GH, linkTCPS2} from './Link.js'

const getLinks = () => {
  return <>
    {linkPrivacyAct} <br/>
    {linkPIPEDA} <br/>
    {linkGDPR2} <br/>
    {linkIHEC} <br/>
    {linkGA4GH} <br/>
    {linkTCPS2}
  </>;
}

export const terminologyObjects = [
  {
    id: 1,
    term: "Anonymized information",
    definition: "Refers to information that has been irrevocably stripped from all direct identifiers."
  },
  {
    id: 2,
    term: "Anonymous information",
    definition: "Refers to information that has never been identifiable."
  },
  {
    id: 3,
    term: "Coded information (Also known as pseudonymized)",
    definition: "Refers to information from which direct identifiers have been removed and have been replaced with a code. Access terms to this code will determine whether the information can identify an individual."
  },
  {
    id: 4,
    term: "Commercial activity",
    definition: "Refers to any particular transaction, act or conduct or any regular course of conduct that is of a commercial character, including the selling, bartering or leasing of donor, membership or other fundraising lists. Examples of non-commercial activities include personal reasons (for ex. Personal greeting card list), journalistic, artistic or literary purposes."
  },
  {
    id: 5,
    term: "Consent agreement (also known as Consent form)",
    definition: "Refers to the legal agreement between the data processor and the data donor that contains the consent and the different rights, obligations, and conditions associated with the donation of biological and/or genetic samples and data and/or other relevant personal and health information, usually for purposes of research, analysis, use, and study."
  },
  {
    id: 6,
    term: "Data steward/user",
    definition: "Refers to an individual, entity or organization that either personally or through a project collects, records, organizes, structures, stores, adapts or alters, retrieves, consults, uses, discloses, transmits, disseminates or otherwise makes available, aligns, combines, restricts, erases or destroys data."
  },
  {
    id: 7,
    term: "Data recipient",
    definition: "Means any person to whom the data is disclosed in accordance with a data access agreement either open, controlled or registered. They are considered secondary users of data, that are distinct from the primary data generating research team. These are usually researchers, research centres or companies who will use the data for further research."
  },
  {
    id: 8,
    term: "Data donor (also known as data subject or data contributor)",
    definition: "Refers to the individual whom the data is about."
  },
  {
    id: 9,
    term: "Data producer",
    definition: "Refers to a researcher, clinician or institution who collected the data."
  },
  {
    id: 10,
    term: "Directly identifiable information ",
    definition: "Refers to information that identifies a specific individual using direct identifiers (name, social insurance number or personal health number)"
  },
  {
    id: 11,
    term: "Federal government institution ",
    definition: "Refers to any department or ministry of state of the Government of Canada and any parent Crown corporation or subsidiary of a corporation."
  },
  {
    id: 12,
    term: "FWUB",
    definition: "Refers to federal work, undertaking or business as defined in Canadian legislation. FWUB organizations include those that devote to airports or air transportation; banking; broadcasting; canals, pipelines, tunnels, and bridges; certain federal Crown agencies; certain First Nations activities; fisheries; grain handling; highway and railway transportation; marine shipping, ferry, and port services; private corporations necessary to the operation of a federal Act; telecommunications; and uranium mining and processing. Organizations in the Northwestern Territories, Yukon, and Nunavut are considered federally regulated as well. Examples: bank, airline, telephone or broadcasting company."
  },
  {
    id: 13,
    term: "GA4GH policies",
    definition: "Refer to the regulatory and ethics policies issued by the Global Alliance for Genomics and Health. They include the GA4GH Framework for Responsible Sharing of Genomic and Health Related Data,  the GA4GH Privacy and Security Policy,  and the GA4GH Security Technology Infrastructure.  These policies are basically in tune with the European General Data Protection Regulation. "
  },
  {
    id: 14,
    term: "GDPR",
    definition: "Refers to the European General Data Protection Regulation"
  },
  {
    id: 15,
    term: "Healthcare professionals ",
    definition: "Refer to doctors, dentists, physiotherapists, genetic counselors, psychologists, and any other professional similarly engaged in activities involving healthcare services."
  },
  {
    id: 16,
    term: "Identifiable information",
    definition: "Refers to information is deemed identifiable “if it may reasonably be expected to identify an individual, when used alone or combined with other available information.” “Identifiability” is a key component of personal information. To assess the identifiability of information, one has to determine which of the following types of information, the information at hand is."
  },
  {
    id: 17,
    term: "IHEC policies and guidelines ",
    definition: "Refer to the policies issued by the International Human Epigenome Consortium."
  },
  {
    id: 18,
    term: "Indirectly identifiable information",
    definition: "Refers to information that, in combination with indirect identifiers (date of birth or place of residence), can be reasonable expected to identify a specific individual."
  },
  {
    id: 19,
    term: "ISO 27799 and ISO/IEC 27001",
    definition: "Refer to the relevant International Organization Standards (ISO) that contain the rules for health informatics and information security management."
  },
  {
    id: 20,
    term: "MUSH",
    definition: "Refers to municipalities, universities, schools, and hospitals."
  },
  {
    id: 21,
    term: "PIPEDA",
    definition: "Refers to Canadian Personal Information Protection and Electronic Documents Act."
  },
  {
    id: 22,
    term: "Personal information",
    definition: "In the Canadian context, personal information is any information, which can be used to associate information to a specific individual, or to identify a specific individual. In other words, personal information is information which belongs to or describes this individual. Ex. include information about race, national or ethnic origin, color, religion, age or marital status; information related to education, medical, criminal or employment history; any identification number, symbol or other particular assigned to the individual; the address, fingerprints or blood type of the individual; the name of the individual where it appears with other personal information relating to the individual or where the disclosure of the name itself would reveal information about the individual."
  },
  {
    id: 23,
    term: "Personal health information.",
    definition: "Refers to information of a living or deceased natural person concerning their physical or mental health, any health service provided to them, donation of body parts or bodily substance of that natural person or information derived from the testing or examination of a body part or bodily substance of that natural person, information collected in the course of providing health services to that natural person or information collected incidentally to the provision of health services to the natural person. It can also include data on non-medical determinants of health such as health behaviours, living and working conditions, personal resources, and environmental factors.  Ontario’s Personal Health Information Protection Act adds to the definition of personal health information: the information that consists of the health history of the individual’s family, the identification of the individual’s healthcare provider, the individual’s payments or eligibility for healthcare, and the individual’s health number.  Quebec categorizes personal health information in domains: medication (e.g. medications prescribed or sold under pharmaceutical control and dispensed in community pharmacies and some medications prescribed and administered in health and social services institutions), laboratory (e.g. the results of medical biology analysis produced by an institution or a private medical biology laboratory), medical imaging (e.g. results of medical imaging examination produced by an institution or a private medical imaging laboratory or a medical diagnostic radiology laboratory), immunization (e.g. vaccines administered), allergy and intolerance (e.g. allergies and intolerances), and hospitalization (e.g. hospitalization summary sheet)."
  },
  {
    id: 24,
    term: "Private individuals and organizations in the course of commercial activities.",
    definition: "Refers to a person, association, partnership, organization or company who engages in a transaction, act or conduct of a commercial character, including the selling, bartering or leasing of donor, membership or other fundraising lists. "
  },
  {
    id: 25,
    term: "Private individuals and organizations NOT in the course of commercial activities.",
    definition: "Refers to a person, association, partnership or organization who engages in activities that do not have any commercial character. Examples include activities strictly for personal purposes, some activities of not-for-profit and charity groups, organizations communicating with people with respect to their employment of profession or for journalistic, artistic or literary purposes."
  },
  {
    id: 26,
    term: "Processing",
    definition: "Refers to any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.  This definition is in alignment with the European GDPR and the GA4GH policies. "
  },
  {
    id: 27,
    term: "Provincial government institution ",
    definition: "Refers to the departments, agencies or ministries of state of the provincial governments."
  },
  {
    id: 28,
    term: "Public information",
    definition: "Refers to personal information that has been legally made public, either because it is deemed public by law public or because the person to whom it is associated consented to it being public, and that has no reasonable expectation of privacy. Public personal information is not protected to the same degree as personal information that has a reasonable expectation of privacy. In general, research using public information is not restricted, unless through the use of a combination and variety of public information, an individual becomes identified."
  },
  {
    id: 29,
    term: "TCPS2",
    definition: "Refers to the Tri-Council Policy Statement Ethical Conduct for Research Involving Humans. The guideline issued by this organism applies to all the researchers and institutions that have been funded by the Canadian Institutes of Health Research (CIHR), the Natural Sciences and Engineering Research Council of Canada (NSERCC) or the Social Sciences and Humanities Research Council (SSHRC)."
  },
  {
    id: 30,
    term: "Terms of Service (also known as Terms of Use or Terms and Conditions)",
    definition: "Refers to the legal agreement between the data processor and the data recipient that contains the different rights, obligations, and conditions associated with the access that the data processor grants the data recipient usually for purposes of research, analysis, use, and study."
  },
  {
    id: 31,
    term: "Links",
    definition: getLinks()
  }
]
