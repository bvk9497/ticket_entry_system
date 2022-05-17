import React from "react";

const TicketContext = React.createContext({
  ticket_list: [],
  add_ticket: (item) => {},
  delete_ticket: (value) => {},
});

export default TicketContext;
