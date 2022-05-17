import classes from "./Ticket.module.css";
import { useContext } from "react";
import Card from "./Card";
import Button from "./Button";
import del from "../assets/delete.svg";
import TicketContext from "../store/TicketContext";

const Ticket = (props) => {
  const delete_clickhandler = () => {
    ctx.delete_ticket(props.value);
  };
  const ctx = useContext(TicketContext);
  return (
    <div className={classes.ticket_item}>
      <button className={classes.delbut} onClick={delete_clickhandler}>
        <img src={del}></img>
      </button>
      
      {/* <Button className={classes.delbut} img = {del} onClickaction={delete_clickhandler}>

      </Button> */}
      <p>Ticket Number#{props.number}</p>
      <p>{props.value}</p>
      
    </div>
  );
};

export default Ticket;
