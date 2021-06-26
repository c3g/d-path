import React from 'react';

export const openEUList = () => {
  window.open('https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Glossary:European_Economic_Area_(EEA)', '_blank').focus();
}

export const openGDPR = () => {
  window.open('https://www.ga4gh.org/genomic-data-toolkit/regulatory-ethics-toolkit/gdpr-forum/', '_blank').focus();
}

export const linkHover = (e) => {
  e.target.style.cursor = 'pointer';
}

export const linkEU = <div style={{ textDecoration : 'underline', display:'inline'}} onMouseOver={linkHover} onClick={openEUList}> here. </div>;

export const linkGDPR = <div style={{ textDecoration : 'underline', display:'inline'}} onMouseOver={linkHover} onClick={openGDPR}> read the "briefs" from GA4GH's GDPR and International Health Data Sharing Forum, </div>;
