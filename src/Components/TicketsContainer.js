import classes from "./TicketsContainer.module.css";
import Ticket from "./Ticket";
import React, { useContext } from "react";
import TicketContext from "../store/TicketContext";

const TicketsContainer = (props) => {
  const ctx = useContext(TicketContext);

  return (
    <React.Fragment>
      <p>Your Selected Tickets</p>
      <div className={classes.ticketscontainer}>
        {ctx.ticket_list.map((item,i) => {
          return <Ticket value={item.value} number={i+1}></Ticket>;
        })}
      </div>
    </React.Fragment>
  );
};

export default TicketsContainer;
