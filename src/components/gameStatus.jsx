import "./gameStatus.css";
import redTurn from "./images/turn-background-red.svg"
import yellowTurn from "./images/turn-background-yellow.svg"

const GameStatus = ({player}) => {
  return (
    <div>
      <img className = "red-turn"
      src = {
        player === 'red' ? redTurn
        : player === 'yellow' ? yellowTurn
        : ''
      }
      alt={'board'}/>
    </div>
  )
}


export default GameStatus;
