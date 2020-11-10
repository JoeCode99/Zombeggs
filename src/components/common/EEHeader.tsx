import React from 'react';
import '../../index.css';

const EEHeader = ({title, sub, source_img} : {title: string, sub: string, source_img: string}) => {
  return (
    <div className="eeheader">
      <img src={`${process.env.PUBLIC_URL}/images/${source_img}`} alt={`${title} map`} />
      <h1>{title}</h1>
      <h3><span>{sub}</span></h3>
    </div>
  );
}

export default EEHeader;
