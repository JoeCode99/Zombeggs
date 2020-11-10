import React, {useState, useEffect} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Game from './components/Game';
import Map from './components/Map';
import GameDatabase from './components/common/GameDatabase';
import './index.css';

const randomQuote: Array<string> = [
  "Are ya winnin' son?",
  "Go get dem eggs",
  "Scrambled, not stirred",
]

function App() {
  const [gameList, setGameList] = useState([<></>]);
  
  const populateList = () => {
    const tempGameList = [];
    for (const game of [...GameDatabase.keys()]) {
      tempGameList.push(<Link style={{textDecoration: 'none'}} key={game} to={'/' + game}><li>{game.replace(/_/g, ' ')}</li></Link>);
      setGameList(tempGameList);
    }
  }

  useEffect(() => {
    populateList();
  }, [])

  return (
    <React.Fragment>
      <div className="zombeggsheader">
        <Link style={{textDecoration: 'none', color: 'black'}} to="/"><h2>Zombeggs</h2></Link>
        <h4>{randomQuote[Math.floor(Math.random() * 3)]}</h4>
      </div>
      <Switch>
        <Route exact path="/">
        <ul className="gameslist">
          {gameList}
        </ul>
        </Route>
        <Route exact path="/:game" ><Game /></Route>
        <Route exact path="/:game/:map"><Map /></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
