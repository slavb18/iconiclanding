import * as React from "react";
import "./Logo.css";
const Logo = (props) => {
  return (
    <div className={`logo ${props.className || ""}`}>
      {props.brooklyn || "Iconic"}
    </div>
  );
};
export default Logo;
