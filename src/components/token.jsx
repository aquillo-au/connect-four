import "./token.css";
import yellowToken from "./images/counter-yellow-large.svg"
import redToken from "./images/counter-red-large.svg"

const Token = ({src}) => {
  return (
    <img
    src = {
      src === 'red' ? redToken
      : src === 'yellow' ? yellowToken
      : ''
    }
    alt ={src}
    />

  );
};

export default Token;
