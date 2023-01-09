import "./navbar.css";

const Navbar = ({onClick}) => {
  return (
    <div className="navbar">
      <button className="purple-button menu-button">Menu</button>
      <button className="purple-button restart-button" onClick={onClick}>Restart</button>
      <div className="whiteBox">
      </div>
    </div>
  )
};

export default Navbar;
