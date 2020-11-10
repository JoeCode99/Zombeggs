import React from 'react';
import EEHeader from './EEHeader';
import List from './List';
import "../../index.css";

interface ITypes {
    steps: Array<Array<string>>;
    title: string;
    img_src: string;
    sources: string;
    minPlayers: number;
    map: string;
}

function EEPage({steps, title, img_src, sources, minPlayers, map} : ITypes) {
    return (
      <React.Fragment>
        <EEHeader 
          title={title}
          sub="Full Guide" 
          source_img={img_src}
        />
        <p className="playerReq"><strong>Min Players Required &nbsp;&nbsp;<span className="playerNo">&nbsp;{minPlayers}&nbsp;</span></strong></p>
        <List content={steps} map={map}/>
        <p style={{height: '30px'}}></p>
        <p className="playerReq"><strong>Sources <span className="playerNo">{sources}</span></strong></p>
        <p style={{height: '15px'}}></p>
      </React.Fragment>
    );
  }

export default EEPage;