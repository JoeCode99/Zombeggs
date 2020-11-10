import React from 'react';
import {Link, useParams} from 'react-router-dom';
import GameDatabase from './common/GameDatabase';
import '../index.css';

const Game = () => {
    const { game } = useParams();
    const maps = GameDatabase.get(game) || [''];
    return (
        <>
        <div className="gametitle">
            <h2>Maps for <b className="gamename">{game.replace(/_/g, ' ')}</b></h2>
        </div>
        <ul className="gameslist">
            {maps.map((i: string) => <Link style={{textDecoration: 'none'}} to={'/' + game + '/' + i} key={i}><li>{i}</li></Link>)}
        </ul>
        </>
    )
}

export default Game;