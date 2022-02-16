import { createContext } from "react";

const Itemscontext = createContext({
  Items: [],
  TotalAmount: 0,
  AddItem: (name) => {},
  RemoveItem: (id) => {},
  Clrcart: () => {},
});

export default Itemscontext;
