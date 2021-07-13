import React from 'react';

export const linkHover = (e) => {
  e.target.style.cursor = 'pointer';
}

export const openEUList = () => {
  window.open('https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Glossary:European_Economic_Area_(EEA)', '_blank').focus();
}

export const linkEU = <div style={{ textDecoration : 'underline', display:'inline'}} onMouseOver={linkHover} onClick={openEUList}> here. </div>;

export const openGDPR = () => {
  window.open('https://www.ga4gh.org/genomic-data-toolkit/regulatory-ethics-toolkit/gdpr-forum/', '_blank').focus();
}

export const linkGDPR = <div style={{ textDecoration : 'underline', display:'inline'}} onMouseOver={linkHover} onClick={openGDPR}> read the "briefs" from GA4GH's GDPR and International Health Data Sharing Forum, </div>;

export const openPrivacyAct = () => {
  window.open('https://laws-lois.justice.gc.ca/eng/acts/p-21/page-1.html ', '_blank').focus();
}

export const linkPrivacyAct = <div style={{ textDecoration : 'underline', display:'inline'}} onMouseOver={linkHover} onClick={openPrivacyAct}> Privacy Act of Canada </div>;

export const openPIPEDA = () => {
  window.open('https://laws-lois.justice.gc.ca/eng/acts/P-8.6/index.html ', '_blank').focus();
}

export const linkPIPEDA = <div style={{ textDecoration : 'underline', display:'inline'}} onMouseOver={linkHover} onClick={openPIPEDA}> PIPEDA </div>;

export const openGDPR2 = () => {
  window.open('https://gdpr-info.eu/  ', '_blank').focus();
}

export const linkGDPR2 = <div style={{ textDecoration : 'underline', display:'inline'}} onMouseOver={linkHover} onClick={openGDPR2}> GDPR </div>;

export const openIHEC = () => {
  window.open('http://ihec-epigenomes.org/about/policies-and-guidelines/', '_blank').focus();
}

export const linkIHEC = <div style={{ textDecoration : 'underline', display:'inline'}} onMouseOver={linkHover} onClick={openIHEC}> IHEC Policies and Guidelines </div>;

export const openTCPS2 = () => {
  window.open(' https://ethics.gc.ca/eng/policy-politique_tcps2-eptc2_2018.html ', '_blank').focus();
}

export const linkTCPS2 = <div style={{ textDecoration : 'underline', display:'inline'}} onMouseOver={linkHover} onClick={openTCPS2}> TCPS2 </div>;

export const openGA4GH = () => {
  window.open('https://www.ga4gh.org/genomic-data-toolkit/regulatory-ethics-toolkit/#:~:text=The%20GA4GH%20Data%20Privacy%20and,communities%20whose%20data%20are%20shared', '_blank').focus();
}

export const linkGA4GH = <div style={{ textDecoration : 'underline', display:'inline'}} onMouseOver={linkHover} onClick={openGA4GH}> GA4GH Policies </div>;
