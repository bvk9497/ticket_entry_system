import React from "react";
import classes from "./Button.module.css"

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClickaction} >
      {props.value}
      <img src={props.img}/>
    </button>
  );
};

export default Button;