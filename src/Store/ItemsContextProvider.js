import { useReducer } from "react";
import Itemscontext from "./Itemscontext";

const defaultCart = { Items: [], TotalAmount: 0 };

const CartItemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const UpdatedItems = state.Items.concat(action.Items);
    const updatedTotalAmount =
      state.TotalAmount + action.Items.price * action.Items.amount;
    console.log(action.Items);
    return { Items: UpdatedItems, TotalAmount: updatedTotalAmount };
  }
  return defaultCart;
};
const ItemsContextProvider = (props) => {
  const [state, dispatch] = useReducer(CartItemReducer, defaultCart);

  const AddItemHandler = (item) => {
    dispatch({ type: "ADD_ITEM", Items: item });
  };

  const RemoveItemHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM" });
  };

  const cartContext = {
    Items: state.Items,
    TotalAmount: state.TotalAmount,
    AddItem: AddItemHandler,
    RemoveItem: RemoveItemHandler,
  };
  return (
    <Itemscontext.Provider value={cartContext}>
      {props.children}
    </Itemscontext.Provider>
  );
};

export default ItemsContextProvider;
