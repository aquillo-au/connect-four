import "./gameStatus.css";
import redTurn from "./images/turn-background-red.svg"
import yellowTurn from "./images/turn-background-yellow.svg"

const GameStatus = ({player, yellow, red, timer, winner, onClick}) => {
  if(winner){
    return (
      <div className = "winner-box">
        <div className = "winner-text">
          <h1 className='winner-name'>{player === 'red' ? red : yellow}</h1>
          <h1 className='wins'>WINS</h1>
          <button className="purple-button play-button" onClick={onClick}>Play Again?</button>
        </div>
      </div>
    )
  }else{
    return (
      <div className = "turn-bar">
        <img className = "player-turn"
        src = {
          player === 'red' ? redTurn
          : player === 'yellow' ? yellowTurn
          : ''
        }
        alt={'board'}/>
        <h1 className='player-name'>{player === 'red' ? `${red}'s turn` : `${yellow}'s turn`}</h1>
        <h1 className='timer'>{timer}</h1>
      </div>
    )
  }
}


export default GameStatus;
