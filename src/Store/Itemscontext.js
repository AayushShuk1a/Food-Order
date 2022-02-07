import { createContext } from "react";

const Itemscontext = createContext({
  Items: [],
  TotalAmount: 0,
  AddItem: (name) => {},
  RemoveItem: (id) => {},
});

export default Itemscontext;
