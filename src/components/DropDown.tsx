import React from 'react';
import '../index.css';

const DropDown = ({display, position}: {display: string, position: string}) => {
  return (
    <p className="centre-right" style={{display}}><i className={position}></i></p>
  );
}

export default DropDown;
