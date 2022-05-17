import React, { useContext } from "react";
import { useState } from "react";
import Card from "./Card";
import ButtonsContainer from "./ButtonsContainer";
import Button from "./Button";
import classes from "./CreateTicket.module.css";
import back from "../assets/back.svg";
import del from "../assets/delete.svg";
import add from "../assets/add.svg";
import TicketContext from "../store/TicketContext";

const btnvalues2 = [
  { key: 7, value: "7" },
  { key: 8, value: "8" },
  { key: 9, value: "9" },
  { key: 4, value: "4" },
  { key: 5, value: "5" },
  { key: 6, value: "6" },
  { key: 1, value: "1" },
  { key: 2, value: "2" },
  { key: 3, value: "3" },
  { key: "back", value: back },
  { key: 0, value: "0" },
  { key: "del", value: del },
];

const CreateTicket = (props) => {
  const ctx = useContext(TicketContext);
  const [ticketnumber, setticketnumber] = useState("");

  const numberClickHandler = (event) => {
    if (ticketnumber.length < 6) {
      if(props.genValue.toString().length!==0){
        props.reset()
      }
      const num = event.target.innerHTML.replace('<img src="">', "");
      console.log(num);
      setticketnumber((ticketnumber) => ticketnumber.concat(num));
    } else {
      alert("Ticket number should have only 6 numbers");
    }
  };

  const backClickHandler = () => {
    if (ticketnumber.length !== 0) {
      console.log("back clicked");
      setticketnumber((ticketnumber) => ticketnumber.slice(0, -1));
    }
    if (props.genValue.length !== 0) {
      props.reset();
    }
  };

  const deleteClickHandler = () => {
    if (ticketnumber.length !== 0) {
      console.log("del clicked");
      ctx.delete_ticket(ticketnumber);
      setticketnumber((ticketnumber) => (ticketnumber = ""));
    }
    if (props.genValue.length !== 0) {
      console.log("del clicked");
      ctx.delete_ticket(props.genValue.toString());
      props.reset();
    }
  };

  const addticketHandler = () => {
    if (ctx.ticket_list.length < 5) {
      if (ticketnumber.length !== 0 && ticketnumber.length === 6) {
        console.log("Adding ticket clicked", ticketnumber);
        ctx.add_ticket({ key: 1, value: ticketnumber });
        setticketnumber((ticketnumber) => (ticketnumber = ""));
        if(props.genValue.toString().length!==0){
          props.reset()
        }
      } else if (props.genValue.toString().length !== 0) {
        console.log(
          "Adding ticket gen clicked",
          props.genValue.toString().length
        );
        ctx.add_ticket({ key: 1, value: props.genValue.toString() });
        setticketnumber((ticketnumber) => (ticketnumber = ""));
        props.reset();
      } else {
        alert(
          "Ticket number cannot be empty or ticket number length can not be less than 6"
        );
      }
    } else {
      alert(" Ticket limit Reached");
    }
  };

  return (
    <Card>
      <div>
        <h2 className={classes.ticketnumber}>
          {ticketnumber.length > props.genValue.toString().length
            ? ticketnumber
            : props.genValue}
        </h2>
      </div>
      <ButtonsContainer >
        {btnvalues2.map((x) => {
          return (
            <Button
              value={x.value.length === 1 ? x.value : ""}
              img={x.value.length === 1 ? "" : x.value}
              onClickaction={
                x.key === "back"
                  ? backClickHandler
                  : x.key === "del"
                  ? deleteClickHandler
                  : numberClickHandler
              }
            ></Button>
          );
        })}
      </ButtonsContainer>
      <div className={classes.addticket} onClick={addticketHandler}>
        <img src={add} />
        <p>Add Ticket</p>
      </div>
    </Card>
  );
};

export default CreateTicket;
