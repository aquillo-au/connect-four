import "./gameBoard.css";
import Board from "./images/board-layer-white-large.svg"
import BoardBack from "./images/board-layer-black-large.svg"

const GameBoard = ({children}) => {
  return (
    <div>
      <img  className="black-board" src={ BoardBack } alt={'board'}/>
      <img  className="white-board" src={ Board } alt={'board'}/>
      <div className="grid-container">
        {children}
      </div>
    </div>
  )
}


export default GameBoard;
