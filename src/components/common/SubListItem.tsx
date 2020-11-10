import React, { useState } from 'react';
import '../../index.css';
import SubTick from './SubTick';
import SubImageModal from './SubImageModal';

const SubListItem = ({content, step, completed, map} : { content: string, step: number, completed: any, map: string}) => {
  const numColors: Array<string> = ['#EC4E20', '#BDBF09'];
  const [complete, setComplete] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [text, image_src] = content.split(":::");
  const [currSrc, setCurrSrc] = useState("");

  const handleClick = () => {
    completed(!complete);
    setComplete(prev => !prev);
  }

  const modalDisplay = (src: string) => {
    setCurrSrc(src);
    setModalShow(prev => !prev);
  }
  
  const images = image_src !== undefined && image_src.split(" ").map(i => {
    if (i.includes("http")) {
      return <img id="sub-image" key={i} onClick={() => modalDisplay(i)} src={i} style={{display: image_src === undefined ? 'none' : 'inline-block'}} alt="Map" />
    } else if (i.length > 1) {
      return <img id="sub-image" key={i} onClick={() => modalDisplay(i)} src={`${process.env.PUBLIC_URL}/images/${map}/${i}`} style={{display: image_src === undefined ? 'none' : 'inline-block'}} alt="Map" />
    }
    });

  return (
    <React.Fragment>
      <p id='step' onClick={handleClick} style={{backgroundColor: complete ? numColors[1] : numColors[0]}}>{complete ? <SubTick /> : step}</p>
      <div id="content" style={{display: complete ? 'none' : 'block'}}>
        <p id="text-content">{text}</p>
        <div id="subimages">
          {images}
        </div>
        <SubImageModal modalShow={modalShow} image_src={currSrc} setModalShow={modalDisplay} map={map}/>
      </div>
    </React.Fragment>
  );
}

export default SubListItem;
