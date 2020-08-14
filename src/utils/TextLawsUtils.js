export const bestPracticesText = {
  accountability : [
    'All persons and organizations are accountable for promoting and protecting data privacy and security and appoint those specifically responsible for privacy, management and reporting. (1, 2, 3, 5)',
    'Appoint a security officer responsible for implementing and enforcing security policies/practice, monitoring compliance with security policies through standards, audits and reviews. (2, 3, 5)',
    'Where relevant, the data steward should maintain communications with the relevant research ethics committees, data access committees, etc. (2)',
    'Data stewards should track changes in relevant laws, regulations, policies, expectations, and best practices and appropriately respond to them with communication and adjustments. (2)',
    'Having a clear directory of personnel for security issues. (5)',
    'Procedure to utilize the complaints/inquires process should be easily accessible and simple to use. Consequences for data breaches should be clearly outlined and enforced. (1, 2)',
    'Ongoing training and education of personnel on privacy and security should be required. (1, 2, 5)',
    'Employees and contractors shall be made fully aware of their responsibilities regarding security and include this in their contractual agreements. (5)'
  ],
  law: [
    'Data controllers and data processors must document and enforce standards and operational procedures associated with the use of data, services, and protection of confidentiality and integrity. (3)',
    'Privacy and security measures could include data processing agreements. (2, 5)',
    'Datasets organized in 2 categories: open & controlled access depending on whether data can be readily aggregated to generate a dataset unique to an individual. (4)',
    'In controlled access, data access request should prove legitimate interest, granted for reasonable time, any trace destroyed after agreement termination. (2, 3, 5)',
    'Data sharing systems with views to recognition and attribution. It is expected that data resource producers will place all information generated in public databases. (1, 3, 4)',
    'If intellectual property rights are exercised, non-exclusive licenses are encouraged. (4)',
    'Make data available for analysis groups within and beyond the project through genome browsers and commercial or consortium compute clouds and/or Biomarts. (4)',
    'All data shall be processed in accordance with all applicable laws, regulations, norms, and guidelines, and should only be disclosed when there is consent or a legal/legitimate interest. (1, 2, 3, 4, 5)',
    'Identifiable data should only be publicly disclosed if data subject consented or if there is a public interest. (2, 3)',
    'Policies and practices regarding privacy and security should be publicly available with plain language summaries. (1, 2, 3, 4, 5)',
    'Assessments of data privacy risks should be conducted. These assessments should address various aspects of disclosure risks such as discrimination, profiling, reputation risks etc. (1, 2, 3, 4, 5)',
    'Safeguards may include: controlled access, pseudonymization, anonymization, and quantitative techniques. (2, 3)',
    'All attempts to re-identify are forbidden. Policies should also address means to prevent indirect identity leaks through for e.g metadata, URLs, and message headers. (1, 2, 3, 4)',
    'Information should be accurate, verifiable, unbiased, current and stored in secure, interoperable, and replicable systems to the greatest extent possible. (2, 3)',
    'Document source of the biological material and implement a set of standard quality measurements. Document biological and chemical reagents. (4)',
    'Develop restoration mechanisms in case of a physical or technical incident. (2, 5)'
  ],
  security: [
    'Have physical and environmental safeguards to protect data in accordance with laws, regulations and standards and demand the same from 3-party service providers. (1, 2, 3, 4, 5)',
    'Whenever possible, technical measures, such as pseudonymization or anonymization, should occur occur at the earliest possible opportunity. (2, 3)',
    'Dedicated hardware for storage and computing and a credentialing server to manage data access, specially for controlled access datasets. (4)',
    'Maintain a data inventory that includes defined sensitivity of data, restrictions on storage and flows, and service to enforce them. (3, 5)',
    'Data processor that stores genomic/health-related data must use strong encryption. These measures should be compliant with laws, regulations, and standards. Keys should be stored outside the system. (3, 5)',
    'Document procedures, practices, and policies to protect confidentiality, privacy, integrity, and security of data. (1, 2, 3, 4, 5)',
    'Have a process for testing, monitoring and evaluating those measures.Any changes relating to security should be reviewed for privacy and security impacts prior to implementation. (2, 3, 4, 5)',
    'Technical should comply with relevant guidelines and regulations and aim to be interoperable. They should also have third party audit certifications. In the context of cloud computing, these could be ISO and SSAE. (2, 3, 4, 5)',
    'Emergency management and disaster recovery measures, including regular backups should be implemented. (2, 3, 5)',
    'Data sustainability is encouraged, where in accordance with the data subject\'s consent and the relevant laws, data should be retained for future processing through archiving, indexing, and retrieval systems. (1,2)',
    'Actions should be taken against known emerging threats (upgrades/updates and security patches) for measures, hardware, and software. (2, 5)',
    'Physical measures against natural disasters should be in place. (2, 3, 5)',
    'Mechanisms and procedures in place to detect breaches. (1, 3, 5) ',
    'Data breaches should be reported to the organization\'s data steward without undue delay and to the competent supervisory authority, data protection officer and relevant research ethics committee. Data breaches that result in a high risk of harm to the rights or interests of the data subject should also be reported to the affected data subjects in a public communication or equally effective measure. Consequences for breaches should be clearly stipulated. (2, 3, 5).',
    'Logs of all security-relevant events should be recorded. All suspicious even should be investigated. (2, 3, 5)',
    'Security logs must include: user ID, type of event, date and time, success or failure, origin, name of affected data, system component, and resource. Kept for 1 year. (3)',
    'Datasets organized in 2 categories: open & controlled access depending on whether data can be readily aggregated to generate a dataset unique to an individual. (4) ',
    'Each organization should implement Identity and Management policies to verify identity of authorized people and keep records. (2, 3, 5)',
    'Additional mechanisms should be considered to address cases of compelled disclosure by state authorities. (2)',
    'Have dedicated hardware for storage and computing and a credentialing server to manage. (4)',
    'Requests for data should be able to demonstrate at least: 1) legitimate purpose/interest/use, 2) authorized accessibility to specific individuals, 3) reasonable and specific time period of data access, 4) destruction of data after use. (2, 5)',
    'Data should only be disclosed in situations where 1) consent has been provided or 2) when there is a legal and appropriate need for disclosure 3) data subjects have knowingly made their own identifiable data public.  (2, 3, 5)',
    'Organizations shall schedule internal and external security processes independently audited. orhanizations should also record and audit log of all security-related events. Where possible, audits and their documentation should be automated. Audit logs should be retained for at least a year or as specified by law. (2)',
    'Audits/Assessments should also assess data integrity and quality. Specifically, if data processing involves a vulnerable population. If practical, the organization should consider a vulnerable population-specific privacy impact assessment. (2, 3)',
    'Audits should include management reviews. (5)'
  ]

};

export const cadLawsText = {
  accountability: [
    'ID Person with highest authority in public body or designate a person so they are accountable for the compliance of the organization with corresponding laws. (1,2,5)',
    'Implement procedures to receive and respond to complaints and inquiries from user/clients. (5)',
    'Implement/require practices/policies for training staff regarding the policies/practices of the organization, including those regarding privacy/security. (5)',
  ],
  law: [
    'Contractual or other means should be used to provide comparable levels of protection while information is processed by a third party. The management of health informations is governed by specific rules of laws with which the contract has to comply, particularly with respect to security measures. (2,5)',
    'Execute a contract that determines the type of information being transferred or communicated, ID the purposes and scope of the use and transfer/communication, terms of confidentiality, and terms/measures of data protection. (1,5)',
    'Display clear terms of service stating the purpose, limitations and conditions associated with the use of the data, including for instance that coded or anonymized data shall not be re-identified. (1,5)',
    'Data shall be collected used, and disclosed by fair and lawful means and limited to the identified purposes. Details on collection, storage, and disclosure shall be informed. Before relasing to outside of the province, equivalent protection shall be ensured in the recipient\'s policies/practices. (1,2,5)',
    'Policies/Practices on the management of personal information shall be implemented and made readily available. (1,2,3,5)',
    'Personal information shall be as accurate, complete, and up-to-date as necessary. Everyone shall be able to request the correction of their personal information. (1,2,3,5)',
    'An inventory shall be kept with info pertaining the content and protection measures. (1)'
  ],
  security: [
    'Reasonable security measures to ensure the protection of personal information shall be implemented based on the sensitivity of the information, the purposes for which it is used, the quantity and distribution, and the medium on which it is stored. They shall be against theft, loss, damage, unauthorized access, disclosure, copying, modification or use. They can be physical, organizational or technological. (1,2,3,5)',
    'Technological measures can include: coding, de-identification, encryption, anonymization, firewalls; physical measures can include: locked filing cabinets and restricted access to offices; and administrative/organizational measures can include: security clearances and limited access on need-to-know basis. (1,2,3,5)',
    'Data security breaches shall be reported to the Commissioner if believed to create real risk of significant harm (bodily harm, humiliation, damage to reputation or relationship, loss of employment, business or professional opportunities, financial loss, identity theft, negative effects on credit, damage or loss of property) to an individual. (2,5)',
    'Organizations shall keep a record of every breach of data security. Have response mechanisms in case of data breach, including who to inform or report. Record keeping shall include: type of event, data/time, success/failure, origin, data/system/resources affected. (5)',
    'Data Access committee to assess the data recipient/user and the intended use. Execute a data access contract that that determines the type of information being transferred or communicated, ID the purposes and scope of the transfer/communication, terms of confidentiality, and terms/measures of data protection. (1,5)',
    'Display clear terms of service stating the purpose, limitations and conditions associated with the use of the data, including for instance that coded or anonymized data shall not be re-identified. (1,5)',
    'Organizations may be audited by a higher institutions to verify the practices/policies of management of personal information. (1,2,5)',
    'Regularity and extent of audits has an impact on the grant/renewal of organizations\' acreditation. (3)'
  ]
};

export const cadLawCardsText = [
  'Act Respecting Access to Documents held by Public Bodies',
  'Act Respecting the Sharing of Certain Health Information',
  'Act to Establish a Legal Framework for Information Technology',
  'Act Respecting Healthcare Services and Social Services',
  'PIPEDA Principles'
];

export const bestPracticesCardsText = [
  'GA4GH Framework',
  'GA4GH Data Privacy and Security Policy',
  'GA4GH Data Security Infrastructure Policy',
  'IHEC',
  'ISO 27799 & 27001'
]
