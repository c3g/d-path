import React from 'react';

export const openEUList = () => {
  window.open('https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Glossary:European_Economic_Area_(EEA)', '_blank').focus();
}

export const linkHover = (e) => {
  e.target.style.cursor = 'pointer';
}

export const link = <div style={{ textDecoration : 'underline', display:'inline'}} onMouseOver={linkHover} onClick={openEUList}> here. </div>;
