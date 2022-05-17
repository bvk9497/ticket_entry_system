import React from "react";
import spinner from "../assets/Spinner.jpg"
import classes from "./RandomTicketGenerator.module.css"

  
const RandomTicketGenerator = (props)=>{
    

const getRandomArbitrary = () =>{
    let value = Math.floor(Math.random() * (999999 - 100000) + 100000);
    props.generate(value)
    // console.log(value);
  }
    
    return (
        <div className={classes.arranger}>
            <p>Click the wheel to generate random tickets</p>
            <img src={spinner} onClick={getRandomArbitrary}/>
            <div>
                <p>Ticket number range 100000-999999</p>
            </div>
        </div>
    );
}

export default RandomTicketGenerator