import React from 'react';
import Game from './Components/Game/Game';
import './App.css';
import pretty from "./pretty.jpg"

function App() {
  const phakhakhailathavongs = {
    name: "Phakhailathavongs",
    logoSrc: {pretty}
  }
  const jacob = {
    name: "Jacob",
    logoSrc: {pretty}
  }
  return (
    <div className="App">
      <Game
        venue='Underpass'
        homeTeam={phakhakhailathavongs}
        awayTeam={jacob}
      />
    </div>
  );
}

export default App;
