import { useReducer } from "react";
import Itemscontext from "./Itemscontext";

const defaultCart = { Items: [], TotalAmount: 0 };

const CartItemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.TotalAmount + action.Items.price * action.Items.amount;

    const EnteredItemsIndex = state.Items.findIndex(
      (items) => items.id === action.Items.id
    );
    const EnteredItems = state.Items[EnteredItemsIndex];
    let UpdatedItems;
    if (EnteredItems) {
      const updatedItem = {
        ...EnteredItems,
        amount: EnteredItems.amount + action.Items.amount,
      };
      UpdatedItems = [...state.Items];
      UpdatedItems[EnteredItemsIndex] = updatedItem;
    } else {
      UpdatedItems = state.Items.concat(action.Items);
    }
    return { Items: UpdatedItems, TotalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE_ITEM") {
    // console.log(state.Items);
    const EnteredItemIndex = state.Items.findIndex(
      (item) => item.id === action.Id
    );
    // console.log(EnteredItemIndex);
    const EnteredItems = state.Items[EnteredItemIndex];
    // console.log(EnteredItems);
    const updatedTotalAmount = state.TotalAmount - +EnteredItems.price;
    let UpdatedItems;
    if (EnteredItems.amount === 1) {
      UpdatedItems = state.Items.filter((item) => item.id !== action.Id);
    } else {
      const updatedItem = {
        ...EnteredItems,
        amount: EnteredItems.amount - 1,
      };
      UpdatedItems = [...state.Items];

      UpdatedItems[EnteredItemIndex] = updatedItem;
    }
    return { Items: UpdatedItems, TotalAmount: updatedTotalAmount };
  }

  if (action.type === "CLEAR") {
    return defaultCart;
  }
  return defaultCart;
};
const ItemsContextProvider = (props) => {
  const [state, dispatch] = useReducer(CartItemReducer, defaultCart);

  const AddItemHandler = (item) => {
    dispatch({ type: "ADD_ITEM", Items: item });
  };

  const RemoveItemHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", Id: id });
    // console.log("clicked");
  };

  const ClearCartHandler = () => {
    dispatch({ type: "CLEAR" });
  };

  const cartContext = {
    Items: state.Items,
    TotalAmount: state.TotalAmount,
    AddItem: AddItemHandler,
    RemoveItem: RemoveItemHandler,
    Clrcart: ClearCartHandler,
  };
  return (
    <Itemscontext.Provider value={cartContext}>
      {props.children}
    </Itemscontext.Provider>
  );
};

export default ItemsContextProvider;
