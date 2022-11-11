import "./Button.css";

function Button({ variant, text }) {
  return <button className={`button ${variant}`}>{text}</button>;
}

export default Button;
