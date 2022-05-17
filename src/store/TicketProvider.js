import TicketContext from "./TicketContext";
import { useReducer } from "react";

const defaultticketstate = {
  ticket_list: [],
};

const ticketReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedTickets = [];
    let existing_item = state.ticket_list.findIndex(
      (item) => item.value === action.item.value
    );
    console.log(existing_item);
    if (existing_item !== -1) {
      alert("Item already Exists");
      updatedTickets = state.ticket_list;
    } else {
      updatedTickets = state.ticket_list.concat(action.item);
      console.log(updatedTickets);
    }

    return {
      ticket_list: updatedTickets,
    };
  }
  if (action.type === "DELETE") {
    const updatedTickets = state.ticket_list.filter(
      (item) => item.value !== action.id
    );
    return {
      ticket_list: updatedTickets,
    };
  }

  return defaultticketstate;
};

const TicketProvider = (props) => {
  const [ticketState, dispatcher] = useReducer(
    ticketReducer,
    defaultticketstate
  );
  const add_ticketHandler = (item) => {
    dispatcher({ type: "ADD", item: item });
  };
  const delete_ticketHandler = (id) => {
    dispatcher({ type: "DELETE", id });
  };
  const ticketContext = {
    ticket_list: ticketState.ticket_list,
    add_ticket: add_ticketHandler,
    delete_ticket: delete_ticketHandler,
  };
  return (
    <TicketContext.Provider value={ticketContext}>
      {props.children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;
