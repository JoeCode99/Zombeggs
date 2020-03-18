import React from 'react';
import '../index.css';

const SubImageModal = ({modalShow, image_src, setModalShow, map} : {modalShow: boolean, image_src: string, setModalShow: any, map: string}) => {
  return ( 
    <div id="myModal" className="modal" style={{display: (modalShow) ? 'block' : 'none'}}>
      <span className="close" onClick={setModalShow}>&times;</span>
      {(image_src !== undefined && image_src.length > 1) && image_src.includes("http") ? <img className="modal-content" id="img01" src={image_src} alt="Map"/>
        : image_src.length > 1 && <img className="modal-content" id="img01" src={require(`../images/${map}/${image_src}`)} alt="Map"/>}
    </div>
  );
}

export default SubImageModal;
