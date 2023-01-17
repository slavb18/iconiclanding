import * as React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <div className={`button ${props.className || ""}`}>
      <span className="button-1">{props.button || "Регистрация"}</span>
    </div>
  );
};
export default Button;
