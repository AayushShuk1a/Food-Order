import { useContext } from "react";
import Itemscontext from "../../Store/Itemscontext";
import CartIcon from "../Carts/CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const CartCtx = useContext(Itemscontext);

  const NumberOfItems = CartCtx.Items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{NumberOfItems}</span>
    </button>
  );
};

export default CartButton;
