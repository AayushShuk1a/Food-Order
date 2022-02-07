import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import Itemscontext from "../../Store/Itemscontext";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const Cartctx = useContext(Itemscontext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {Cartctx.Items.map((items) => (
        <CartItem
          Key={items.id}
          id={items.id}
          price={+items.price}
          amount={items.amount}
          name={items.name}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      {console.log(Cartctx.Items)}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${Cartctx.TotalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
