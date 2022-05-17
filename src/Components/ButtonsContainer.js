import React from 'react';
import classes from './ButtonsContainer.module.css';

const ButtonsContainer = props => {
  return <div className={classes.buttonscontainer}>{props.children}</div>
};

export default ButtonsContainer;    