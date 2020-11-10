import React from 'react';
import {useParams} from 'react-router-dom';
import EEPage from './common/EEPage';
import MapDatabase from './common/MapDatabase.js';

function Map() {
    const { map } = useParams();
    const data = MapDatabase.get(map) || { steps: [['']], sources: '', minPlayers: 1};
    return (
        <React.Fragment>
            <EEPage steps={data.steps || [['']]} title={map.replace(/_/g, ' ')} img_src={map + '/' + map + '.jpg'} sources={data.sources || ''} minPlayers={data.minPlayers} map={map}/>
        </React.Fragment>
    );
}
  
export default Map;
  