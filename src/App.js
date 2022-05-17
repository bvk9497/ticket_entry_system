import React, { useState, useContext } from "react";
import CreateTicket from "./Components/CreateTicket";
import RandomTicketGenerator from "./Components/RandomTicketGenerator";
import TicketsContainer from "./Components/TicketsContainer";
import classes from "./App.module.css";
import TicketProvider from "./store/TicketProvider";
import TicketContext from "./store/TicketContext";

function App() {
  const get_Genvalue = (generated_value) => {
    console.log(generated_value);
    setGen(generated_value);
  };

  const resetting = () => {
    setGen((value) => (value = ""));
  };

  // const backClicked = (backed_value)=>{
  //   setGen(backed_value.toString().slice(0, -1));
  // }

  const [value, setGen] = useState("");

  const ctx = useContext(TicketContext);
  return (
    <TicketProvider>
      <div className={classes.arranger}>
        <CreateTicket
          genValue={value}
          reset={resetting} /* back = {backClicked}*/
        ></CreateTicket>
        <RandomTicketGenerator generate={get_Genvalue}></RandomTicketGenerator>
      </div>
      <TicketsContainer availabletickets={ctx.ticket_list}></TicketsContainer>
    </TicketProvider>
  );
}

export default App;
