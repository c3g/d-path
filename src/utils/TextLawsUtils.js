export const newBestPracticesText ={
  accountability : [
    'Designated Person Accountable: There should be a collective responsibility towards data security and privacy, meaning that all data processors (and controllers) within organizations that adhere to its dispositions should be held accountable and take the appropriate security measures. (1,2,3,5) ',
    'The designation of a data protection officer is recommended. Appropriate and regular training for the identified individuals to discharge these duties should be provided. (2,3,5)',
    'Procedures to respond to complaints and inquiries: Establish procedures to receive and respond to complaints or inquiries regarding privacy and data security. These should be simple and easy to access (e.g., through designating a contact person). (1,2)',
    'Training for personnel on protection of PI: Allocate resources to ongoing training and education towards responsible data sharing, especially for data processors. (1,2,5)',
  ],
  law: [
    'Contract with Data Producers/Hosts: Data processors (and controllers) should adopt and document appropriate standards, procedures and technical mechanisms for ensuring privacy and security of the data. (3) ',
    'Contracts with Data Recipients/Users: Adopt data processing agreements (i.e., data transfer, use or sharing agreements) as privacy and data access safeguards. (1,2,3,4,5)',
    'Consent, Purpose, Limits to Collection, Use and Disclosure: The collection, use, transfer, and storage of personal data should be limited to what data subjects have consented to, while complying with relevant international and national law, regulations, general ethical principles, and best practice standards. The public disclosure of identifiable data should be limited to consented or required by legal situations. (1,2,3,4,5)',
    'Privacy and Confidentiality Integrity Policies: Privacy and Confidentiality policies should:',
    '     • comply with applicable privacy and data protection laws, regulations and guidelines; (1,2,3,4,5)',
    '     • set up safeguards and measures proportionate to the nature and uses of the date, as well as possible related risks and benefits (e.g., controlled access, pseudonymization/anonymization etc.); (1,2,5)',
    '     • include periodical risk assessments; (1,2,3,4,5)',
    '     • forego and prevent re-identification of anonymized data as well as unauthorized access by third parties; (1,2,3,4)',
    '     • be made publicly available and accessible to data subjects. (2,3,4)',
    'Data integrity and update mechanisms: Data processors should ensure that all data and metadata are accurate, verifiable, unbiased, proportionate, current and secure. All data should be processed, stored and shared in a way that promotes integrity, interoperability, replicability. To that end, data processors should implement feedback mechanisms, conduct regular quality assessments and document and enforce written operational procedures, as well as regular back-ups. (1,2,3,4,5)',
  ],
  security: [
    'Technical and security measures: Technical and physical security measures should: ',
    '     • provide safeguards ((e.g., controlled access, pseudonymization/anonymization, encryption, etc.) proportionate to security risks (e.g., unauthorized access; data loss; misuses). (1,2,3,4,5)',
    '     • comply with regulations, standards and demands from providers. (2,3,5)',
    '     • set up risk assessment and monitoring procedures. (2,3,5)',
    '     • include configuration management and upgrades of hardware and software. (2,5)',
    '     • include protections against physical risks (e.g., natural hazards) and set emergency and disaster management plans (e.g., with regular back-ups). (2,3,5)',
    'Guidelines and measures for safe, lawful disclosure, transfer and storage: Have procedures, practices and policies in place to protect privacy and confidentiality that are documented and that comply with relevant guidelines and regulations (1,2,3,4,5)',
    'Data sustainability for future uses (when consented and lawful) and data interoperability are encouraged. (1,2,3,4,5)',
    'Ensure that cloud service providers have independently audited against comprehensive and internationally recognized and respected information security standards (International Organization for Standardization (ISO) and Statement on Standards for Attestation Engagements (SSAE)). (2,5)',
    'Procedures in case of data breaches: Data processors should document procedures for monitoring system activities, report vulnerabilities and notify breaches. (1,2,3,5)',
    'Data processors (and controllers) should assess risks; investigate, solve and report security incidents (breaches or threats). (1,2,3,5)',
    'All stakeholders should report breaches to the data controller (also known as data producer), applicable regulatory authorities, ethics committee, and the data subjects concerned by the breach. (1,2,3,5)',
    'Data access policies: Data access policies should:',
    '     •  restrict access to authorized individuals with a legitimate interest for a predefined time period; (1,2,3,4,5)',
    '     •  include authentication mechanisms and identity and access management (IAM) procedures; (2,3,4,5)',
    '     •  keep records of data access; (2,3,5)',
    '     •  limit public disclosures to consented or authorized by legal situations. (2,3)',
    '     •  use of the US National Institute of Standards and Technology (NIST) Special Publication 800-63-3 [8] as guidance is encouraged (3)',
    'External and Internal audits: Perform routinely risk assessments (1,2,3), and periodically (e.g., yearly) engage an independent third-party to perform security assessment and penetration testing. (2,3,5). ',
    'Specific risk assessment should be performed when data regarding vulnerable population is processed. (2) ',
    'All security-related events (user identity, type of event, date and time, success or failure indication, origination of event, name of affected data, system component, or resource) should be audited, and audit logs be kept for at least a year (2,3,5).',
  ]
};

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

export const quebecLawsText = {
  accountability: [
    'ID Person with highest authority in a public body or designate a person so they are accountable for the compliance of the organization with corresponding laws. (1,2,5)',
    'Implement procedures to receive and respond to complaints and inquiries from users/clients. (5)',
    'Implement/require practices/policies for training staff regarding the policies/practices of the organization, including those regarding privacy/security. (5)',
  ],
  law: [
    'Contractual or other means should be used to provide comparable levels of protection while information is processed by a third party. The management of health information is governed by specific rules of laws with which the contract has to comply, particularly with respect to security measures. (2,5)',
    'Execute a contract that determines the type of information being transferred or communicated, ID the purposes and scope of the use and transfer/communication, terms of confidentiality, and terms/measures of data protection. (1,5)',
    'Display clear terms of service stating the purpose, limitations and conditions associated with the use of the data, including for instance that coded or anonymized data shall not be re-identified. (1,5)',
    'Data shall be collected, used, and disclosed by fair and lawful means and limited to the identified purposes. Details on collection, storage, and disclosure shall be informed. Before releasing to outside of the province, equivalent protection shall be ensured in the recipient\'s policies/practices. (1,2,5)',
    'Policies/Practices on the management of personal information shall be implemented and made readily available. (1,2,3,5)',
    'Personal information shall be as accurate, complete, and up-to-date as necessary. Everyone shall be able to request the correction of their personal information. (1,2,3,5)',
    'An inventory shall be kept with info pertaining to the content and protection measures. (1)'
  ],
  security: [
    'Reasonable security measures to ensure the protection of personal information shall be implemented based on the sensitivity of the information, the purposes for which it is used, the quantity and distribution, and the medium on which it is stored. They shall be against theft, loss, damage, unauthorized access, disclosure, copying, modification or use. They can be physical, organizational or technological. (1,2,3,5)',
    'Technological measures can include: coding, de-identification, encryption, anonymization, firewalls; physical measures can include: locked filing cabinets and restricted access to offices; and administrative/organizational measures can include: security clearances and limited access on need-to-know basis. (1,2,3,5)',
    'Data security breaches shall be reported to the Commissioner if believed to create real risk of significant harm (bodily harm, humiliation, damage to reputation or relationship, loss of employment, business or professional opportunities, financial loss, identity theft, negative effects on credit, damage or loss of property) to an individual. (2,5)',
    'Organizations shall keep a record of every breach of data security. Have response mechanisms in case of data breach, including who to inform or report. Record keeping shall include: type of event, data/time, success/failure, origin, data/system/resources affected. (5)',
    'Data Access committee to assess the data recipient/user and the intended use. Execute a data access contract that determines the type of information being transferred or communicated, ID the purposes and scope of the transfer/communication, terms of confidentiality, and terms/measures of data protection. (1,5)',
    'Display clear terms of service stating the purpose, limitations and conditions associated with the use of the data, including for instance that coded or anonymized data shall not be re-identified. (1,5)',
    'Organizations may be audited by a higher institution to verify the practices/policies of management of personal information. (1,2,5)',
    'Regularity and extent of audits has an impact on the grant/renewal of organizations\' accreditation. (3)'
  ]
};

export const euroLawsText = {
  accountability: [
    'Controller or Processor: Designate a representative in the EU (See Art 27 for full details and exceptions and Rec. 80)',
    'Controller and Processor: Designate a Data Protection Officer to inform, monitor, and advise on obligations that need to be fulfilled. (Arts. 37.1(c), 37.2, 38.1, 39, Rec. 97)',
    'Every data subject has the right to lodge a complaint. Controllers should inform data subjects about this right. Supervisory authorities in collaboration with lead authorities, handle complaints lodged by data subjects. (Art. 13.2(d), 15.1(f), 57.1(f), 77, 79, Rec. 122, 125, 141)',
    'Corporate rules should specify complaint procedures. (Art. 47.2(i))',
    'Data protection officer monitors that the controller or processor complies with their obligation to raise awareness and provide training to their staff involved in data processing. (Art 391.(b))',
    'Binding corporate rules should include details about the appropriate data protection training to personnel having permanent or regular access to personal data. (Art. 47.2(n))',
    'When entrusting a processor with processing activities, controllers should only use processors with guarantees of expert knowledge, reliability, and resources. Processors should demonstrate these guarantees. (Rec. 81, Art. 28.1)'

  ],
  law: [
    'Processing by a processor is governed by a contract that specifies their obligations with respect to the data, processing and to the controller, the measures that need to be taken, and the obligations the controller undertakes. (Art. 28.3, 40.3, 42, Rec. 79, 81)',
    'Contracts between the controller and the data subject contain details about the consent (e.g. contact details of the controller, purpose, recipients or categories of recipients, location of processing, contact of data protection officer, etc.) and obligations and necessities associated with the controller\'s performance that make processing of personal data lawful. All relevant information shall be transparent, concise and intelligible, easily accessible, using clear and plain language.',
    'Processor shall only grant access in accordance with the controller\'s instructions/authorization. This access and any other processing shall be governed by a contract. The contract shall state the details of the access and ensure the confidentiality and security of the data, and all the appropriate technical and organizational measures are implemented. (Art. 28, 29, 32.4, Rec. 80)',
    'Processors and controllers shall have contracts with other processors or recipients in third countries or international organizations to establish and ensure appropriate security measures when personal data is transferred to those countries or organizations. (Art. 40.3, 42, 46)',
    'Personal data shall be processed lawfully, fairly, and in a transparent manner in relation to the data subject. It should be collected for specified, explicit and legitimate purposes or as mandated by law. The processing shall be relevant and limited to what is necessary for the purposes expressed. This information shall be contained during the consent process. (Art. 5, 6 )',
    'Further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes is not incompatible with initial purposes. (art. 5,1(b), 89.1)',
    'Processors and controllers must ensure within their performances appropriate security and confidentiality, including preventing unauthorized access or use of data and equipment, unlawful processing, and/or accidental loss, destruction or damage. They should evaluate the relevant risks. This obligation includes making sure authorized personnel undertakes the same obligations. (Art. 5.1(f), 28.3(b), Rec. 39, 83)',
    'Data protection officers are bound by secrecy and confidentiality throughout their performance. (Art. 38.5) ',
    'Data should be accurate and kept up to data. (Art. 5.1(d))',
    'Data subjects have the right to have the controller rectify or complete their personal data when inaccurate or incomplete. (Art. 16)',
    'Controllers and processors shall implement appropriate technical and organizational  measures to ensure security, confidentiality, integrity, availability, and resilience and to restore availability in case of physical or technical incident. (Art. 32.1)'
  ],
  security: [
    'Special category of personal data: personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person\'s sex life or sexual orientation. (Art. 9)',
    'The risks associated with sensitive personal data affect the rights and freedoms of natural persons, varying in likelihood and severity, leading to physical, material and non-material damage: e.g. rise of discrimination, identity theft or fraud, financial loss, damage to reputation, significant economic or social disadvantage, etc. (Rec. 75) ',
    'Controllers shall use appropriate mathematical or statistical procedures for the profiling, and implement technical and organizational measures to ensure inaccuracies are corrected, risks of error minimized, and discriminatory effects are prevented. (Rec. 71)',
    'Processors shall not engage another processor without specific written authorization from controllers. Appropriate security measures when personal data shall be established and ensured. (Art. 28.2)',
    'Controllers and processors shall implement appropriate technical and organizational  measures to ensure security, confidentiality, integrity, availability, and resilience and to restore availability in case of physical or technical incident. (Art. 32.1)',
    'Where the other processor does not fulfill the data protection obligations, the initial processor shall remain fully liable to the controller for the performance of the other processor\'s obligations. (Art. 28.4)',
    'Implementing codes of conduct and internal policies serve as a way to demonstrate that the appropriate security and privacy measures are taken. (Art. 28.5, Rec. 78)',
    'Appropriate levels of security shall account the risks presented by processing, accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to personal data transmitted, stored or otherwise processed. Encryption and pseudonymization are some of the measures taken to mitigate risks. (Art. 32, Rec. 83)',
    'After completion of processing, processors shall return or destroy the data as stated by controllers. (Rec. 81)',
    'Processing for archiving purposes in the public interest, scientific or historical research purposes of statistical purposes shall be subject to appropriate safeguards. They shall ensure that technical and organizational measures are in place. These may include pseudonymization. (Art. 89)',
    'Processor shall inform the controller of a data breach. The controller shall inform the data subject if the breach may result in a high risk to the data subject\'s rights and freedoms. Controller shall also notify the supervisory authority within the next 72hrs of the breach when possible. (Art. 33, 34)',
    'Notification shall include: nature of breach, categories and number of data subjects involved, name and contact of data protection officer, consequences, measures taken. (Art. 33)',
    'Access to do any type of processing (collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment or combination, restriction, erasure or destruction) shall be governed by a contract.  (Art. 4, 28) ',
    'The contract with the recipient/user (or terms of use) shall state the details of the access and ensure the confidentiality and security of the data, and that all the appropriate technical and organizational measures are implemented in accordance with the controller\'s instructions/authorization. (See Art. 28 for the full list of elements the contract shall contain, Art. 29)',
    'Controller and processor shall ensure that any natural person having access to the data processes it in accordance with the controller\'s instructions. (Art. 32.4)',
    'Processor makes available to the controller all information necessary to demonstrate compliance with obligations and allow for and contribute to audits and inspections. (Art. 28.3(h))',
    'Each controller shall maintain records of the processing activities under its responsibility. Each processor shall maintain records of all the processing activities carried out on behalf of the controller. Both will be available to the supervisory authority. (Art. 30)',
    'These records shall contain name and contact information of the processor(s) and of each controller on behalf of which the processor is acting, categories of processing, transfer to a third country or international organization, and safeguards. (Art. 30.2)',
    'Supervisory authorities have the power to perform audits. (Art. 58)',
    'Corporate rules should include mechanisms regarding data protection audits. (Art. 42.2(j))'
  ]
};

export const quebecLawCardsText = [
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
