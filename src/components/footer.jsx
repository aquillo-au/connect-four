import "./footer.css";

const Footer = ({winner}) => {
  return (
    <div className={
      winner === 'red' ? "footer red"
      : winner === 'yellow'? "footer yellow"
      : "footer dark-purple"
    }>
    </div>
  )
}


export default Footer;
