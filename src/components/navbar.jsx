import "./navbar.css";
import yellowMini from "./images/counter-yellow-small.svg"
import redMini from "./images/counter-red-small.svg"

const Navbar = ({onClick}) => {
  return (
    <div className="navbar">
      <button className="purple-button menu-button">Menu</button>
      <div className="token-box">
        <img src = { redMini} alt ="red"/>
        <img src = { yellowMini} alt ="yellow"/>
        <img src = { yellowMini} alt ="yellow"/>
        <img src = { redMini} alt ="red"/>
      </div>
      <button className="purple-button restart-button" onClick={onClick}>Restart</button>
      <div className="whiteBox">
      </div>
    </div>
  )
};

export default Navbar;
