// import "./selector.css";
import redArrow from "./images/marker-red.svg"
import yellowArrow from "./images/marker-yellow.svg"

const Selector = ({src, onMouseEnter, onClick}) => {
  return (
    <div className={'selector-div'} onMouseEnter={onMouseEnter} onClick={onClick}>
      <img
        src = {
        src === 'red' ? redArrow
        : src === 'yellow' ? yellowArrow
        : ''
      } className = {'selector-arrow'} alt ={'selector'}/>
    </div>

  );
};

export default Selector;
