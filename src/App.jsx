import React, { useState } from "react";
import './App.css';
import ScoreBoard from "./components/scoreBoard"
import GameBoard from "./components/gameBoard"
import GameStatus from "./components/gameStatus"
import Token from "./components/token"
import Selector from "./components/selector"
import SelectorBox from "./components/selectorBox"

const gameGridArray = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null]
];

const selectorGridArray = [
  null, null, null, null, null, null, null
];

function App() {
  let [game, setGame] = useState({
    redName: "Bertha",
    yellowName: "Frank",
    redScore: 1,
    yellowScore: 15,
    selectColum: selectorGridArray,
    gameGrid: gameGridArray,
    player: 'red'
  });
  const HoverColumn = (event, column) => {
    event.preventDefault();
    let location = [ null, null, null, null, null, null, null ]
    location[column] = game.player
    setGame({
      ...game,
      selectColum: location
    });
  }

  const ClickColumn = (event, column) => {
    event.preventDefault();
    let currentBoard = game.gameGrid;
    let nomove = false
    let nextPlayer = ''
    !currentBoard[5][column] ? currentBoard[5][column] = game.player
      : !currentBoard[4][column] ? currentBoard[4][column] = game.player
      : !currentBoard[3][column] ? currentBoard[3][column] = game.player
      : !currentBoard[2][column] ? currentBoard[2][column] = game.player
      : !currentBoard[1][column] ? currentBoard[1][column] = game.player
      : !currentBoard[0][column] ? currentBoard[0][column] = game.player
      : nomove = true
      nomove ? nextPlayer = game.player
        : game.player === 'red' ? nextPlayer = 'yellow'
        : nextPlayer = 'red'

    setGame({
      ...game,
      gameGrid: currentBoard,
      player: nextPlayer,
    });
  }
  return (
    <div className="App">
      <ScoreBoard player = 'red' name ={game.redName} score ={game.redScore}/>
      <div className = "game-box">
        <SelectorBox>
          {
            game.selectColum.map((arrow, i) => {
              return (
                  <Selector
                    key={i}
                    src={arrow}
                    column={i+1}
                    onMouseEnter={(event) => HoverColumn(event, i)}
                    onClick={(event) => ClickColumn(event, i)}
                  />
              );
            })
          }
        </SelectorBox>
        <GameBoard>
          {
            game.gameGrid.flat().map((slot, i) => {
              return (
                <Token
                  key={i}
                  cordinates = {i}
                  src={slot}
                />
              );
            })
          }
        </GameBoard>
        <GameStatus player ={game.player}/>
      </div>
      <ScoreBoard player = "yellow" name ={game.yellowName} score ={game.yellowScore}/>
    </div>
  );
}

export default App;
