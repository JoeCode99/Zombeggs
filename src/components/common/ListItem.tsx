import React, { useState } from 'react';
import '../../index.css';
import PropTypes from 'prop-types';
import Tick from './Tick';
import DropDown from './DropDown';
import SubList from './SubList';

const ListItem = ({content, step, lastStep, map} : { content: Array<string>, step: number, lastStep: number, map: string}) => {
  const numColors: Array<string> = ['#F4AC45', '#2292A4', '#BDBF09', "#d5d80d"];
  const showDropDown: boolean = content.length > 1;
  const [complete, setComplete] = useState(false);
  const [position, setPosition] = useState("right");
  const handleClick = () => setComplete(prev => !prev);
  const DropDownPosition = () => setPosition(prev => prev === "right" ? "down" : "right");
  const allComplete = () => setComplete(true);

  return (
    <React.Fragment>
      <div className="listContent" style={{marginBottom: complete ? '-45px' : '-15px', display: complete ? 'inline-block' : 'block', width: complete ? '80px' : '600px'}}>
        <p id='step' onClick={handleClick} style={{backgroundColor: complete ? numColors[2] : step === lastStep ? numColors[3] : numColors[step%2], color: step === lastStep ? 'black' : 'white'}}>{complete ? <Tick /> : step}</p>
        <div id="content" onClick={DropDownPosition} style={{cursor: showDropDown ? 'pointer' : 'auto'}}>
          <p id="text-content" style={{display: complete ? 'none' : 'block'}}>{content[0]}</p>
            <DropDown position={position} display={(complete || !showDropDown) ? 'none' : 'block'}/>
        </div>
      </div>
      <div style={{display: (position === "down" && !complete) ? 'block' : 'none', marginLeft: '100px', marginTop: '40px'}}>
          {!complete && <SubList content={content} allComplete={allComplete} map={map}/>}
      </div>
    </React.Fragment>
  );
}

ListItem.propTypes = {
  step: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default ListItem;
