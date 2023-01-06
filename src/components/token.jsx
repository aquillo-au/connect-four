import "./token.css";
import yellowToken from "./images/counter-yellow-large.svg"
import redToken from "./images/counter-red-large.svg"

const Token = ({ cordinates, src}) => {
  return (
    <img
    src = {
      src === 'red' ? redToken
      : src === 'yellow' ? yellowToken
      : ''
    }
    data={cordinates}
    alt ={src}
    />

  );
};

export default Token;
