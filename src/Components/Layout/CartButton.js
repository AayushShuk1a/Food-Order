import { useContext, useEffect, useState } from "react";
import Itemscontext from "../../Store/Itemscontext";
import CartIcon from "../Carts/CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const CartCtx = useContext(Itemscontext);
  const [BtnisHighlighted, setbtnishighlighted] = useState(false);

  const BtnClasses = `${classes.button} ${
    BtnisHighlighted ? classes.bump : ""
  }`;
  const NumberOfItems = CartCtx.Items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  useEffect(() => {
    if (NumberOfItems === 0) {
      return;
    }

    setbtnishighlighted(true);
    const timer = setTimeout(() => {
      setbtnishighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [NumberOfItems]);

  return (
    <button onClick={props.onClick} className={BtnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{NumberOfItems}</span>
    </button>
  );
};

export default CartButton;
