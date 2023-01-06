import "./scoreBoard.css";
import playerOne from "./images/player-one.svg"
import playerTwo from "./images/player-two.svg"


const ScoreBoard = ({player, name,  score}) => {
  return (
    player === 'red' ?
    <div className={'left-box'}>
      <img className={'red-player'} src={ playerOne } alt={'score'}/>
      <div className={'left-score'}>
        <div className={'left-score-text'}>
          <h5 className={'red-name'}>{name}</h5>
          <h1 className={'red-score'}>{score}</h1>
        </div>
      </div>
    </div>
    : <div className={'right-box'}>
        <img className={'yellow-player'} src={ playerTwo } alt={'score'}/>
        <div className={'right-score'}>
          <div className={'right-score-text'}>
            <h5 className={'yellow-name'}>{name}</h5>
            <h1 className={'yellow-score'}>{score}</h1>
          </div>
        </div>
      </div>
  )
};

export default ScoreBoard;
