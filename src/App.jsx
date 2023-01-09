import React, { useState } from "react";
import { useTimer } from  "reactjs-countdown-hook";
import './App.css';
import ScoreBoard from "./components/scoreBoard"
import GameBoard from "./components/gameBoard"
import GameStatus from "./components/gameStatus"
import Token from "./components/token"
import Selector from "./components/selector"
import SelectorBox from "./components/selectorBox"
import Navbar from "./components/navbar"

function App() {
  let nextPlayer = ''
  let [game, setGame] = useState({
    redName: "Bertha",
    yellowName: "Frank",
    redScore: 0,
    yellowScore: 0,
    selectColum: [ null, null, null, null, null, null, null ],
    gameGrid: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ],
    player: 'red',
    winner: false,
  });
  const handleTimerFinish = () => {
    game.player === 'red' ? nextPlayer = 'yellow'
    : nextPlayer = 'red'
    reset()
    setGame({
      ...game,
      player: nextPlayer,
    })
  }
  const {
    isActive,
    counter,
    pause,
    resume,
    reset,
    } = useTimer(30, handleTimerFinish);
  const RestartGame = (event) => {
    event.preventDefault();
    reset()
    setGame({
      ...game,
      redName: "Bertha",
      yellowName: "Frank",
      redScore: 0,
      yellowScore: 0,
      selectColum: [ null, null, null, null, null, null, null ],
      gameGrid: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ],
      player: 'red',
      winner: false,
    });
  }
  const playAgain = (event) => {
    event.preventDefault();
    reset()
    setGame({
      ...game,
      redScore: game.winner === 'red' ? (game.redScore + 1) : game.redScore,
      yellowScore: game.winner === 'yellow' ? (game.yellowScore + 1) : game.yellowScore,
      selectColum: [ null, null, null, null, null, null, null ],
      gameGrid: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ],
      player: 'red',
      winner: false,
    });
  }
  const checkRow = (row) => {
    const rowOfFour = [game.player, game.player, game.player, game.player];
    const check = game.gameGrid[row].toString().indexOf(rowOfFour.toString()) > -1 ? true : false
    return check
  }
  const checkColumn= (row, column) => {
    let check = false
    if(row < 3){
      if(game.gameGrid[row +3][column] === game.player && game.gameGrid[row +2][column] === game.player && game.gameGrid[row +1][column] === game.player){
        check = true
      }
    }
    return check
  }
  const checkDiagonal = (currentRow, currentColumn) => {
    let check = false
    let count = 0
    let row = currentRow
    let column = currentColumn

    while( row < 6 && column <= 6 && game.gameGrid[row][column] === game.player ){
      count += 1
      column +=1
      row +=1
      console.log(count)
    }
    column = currentColumn - 1
    row = currentRow - 1
    while( row >= 0 && column >= 0 && game.gameGrid[row][column] === game.player ){
      count += 1
      column -=1
      row -=1
      console.log(count)
    }
    console.log(count)
    check = count >= 4 ? true : false
    return check
  }
  const checkOtherDiagonal = (currentRow, currentColumn) => {
    let check = false
    let count = 0
    let row = currentRow
    let column = currentColumn

    while( row >= 0 && column <= 6 && game.gameGrid[row][column] === game.player ){
      count += 1
      column +=1
      row -=1
      console.log(count)
    }
    column = currentColumn - 1
    row = currentRow - 1
    while( row < 6 && column >= 0 && game.gameGrid[row][column] === game.player ){
      count += 1
      column -=1
      row +=1
      console.log(count)
    }
    console.log(count)
    check = count >= 4 ? true : false
    return check
  }
  const checkForWin = (row, column) => {
    let check = false
    if(checkRow(row) || checkColumn(row, column) || checkDiagonal(row, column) || checkOtherDiagonal(row, column)){
      check = true
    }
    return check

  }
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
    if (!game.winner){
      let currentBoard = game.gameGrid;
      let nomove = false
      let row = ''
      !currentBoard[5][column] ? (currentBoard[5][column] = game.player) && (row = 5)
        : !currentBoard[4][column] ? (currentBoard[4][column] = game.player) && (row = 4)
        : !currentBoard[3][column] ? (currentBoard[3][column] = game.player) && (row = 3)
        : !currentBoard[2][column] ? (currentBoard[2][column] = game.player) && (row = 2)
        : !currentBoard[1][column] ? (currentBoard[1][column] = game.player) && (row = 1)
        : !currentBoard[0][column] ? (currentBoard[0][column] = game.player) && (row = 0)
        : nomove = true
      nomove ? nextPlayer = game.player
        : game.player === 'red' ? (nextPlayer = 'yellow') && reset()
        : (nextPlayer = 'red') && reset()
      setGame({
        ...game,
        gameGrid: currentBoard,
        player: checkForWin(row, column) ? game.player : nextPlayer,
        winner: checkForWin(row, column) ? game.player : false
      });
    }
  }
  return (
    <div className="App">

      <ScoreBoard player = 'red' name ={game.redName} score ={game.redScore}/>
      <div className = "game-box">
      <Navbar onClick={RestartGame}/>
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
        <GameStatus player ={game.player} yellow ={game.yellowName} red ={game.redName} timer={counter} winner={game.winner} onClick={playAgain}/>
      </div>
      <ScoreBoard player = "yellow" name ={game.yellowName} score ={game.yellowScore}/>
    </div>
  );
}

export default App;
