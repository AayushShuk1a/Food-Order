import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import Itemscontext from "../../Store/Itemscontext";
import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import CartForm from "./CartForm";

const Cart = (props) => {
  const Cartctx = useContext(Itemscontext);
  const [Chechout, setChechout] = useState(false);
  const [SubmitOrder, setSubmitOrder] = useState(false);

  const AddItemHandler = (items) => {
    Cartctx.AddItem({ ...items, amount: 1 });
  };

  const OnRemoveItemHandler = (id) => {
    Cartctx.RemoveItem(id);
  };

  const CheckoutHandler = () => {
    setChechout(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {Cartctx.Items.map((items) => (
        <CartItem
          Key={items.id}
          id={items.id}
          price={+items.price}
          amount={items.amount}
          name={items.name}
          onAdd={AddItemHandler.bind(null, items)}
          onRemove={OnRemoveItemHandler.bind(null, items.id)}
        ></CartItem>
      ))}
    </ul>
  );

  const ConfirmCartHandler = async (userdata) => {
    setSubmitOrder(true);
    await fetch("https://meals-fef63-default-rtdb.firebaseio.com/Order.json", {
      method: "POST",
      body: JSON.stringify({ user: userdata, OrderItems: Cartctx.Items }),
    });
    Cartctx.Clrcart();
  };

  const aftersubmit = (
    <div className={classes.actions}>
      <p className={classes.paragraph}> Your Order is Submitted</p>
      <button className={classes.button} onClick={props.onClick}>
        Close
      </button>
    </div>
  );

  const BeforeSubmit = (
    <React.Fragment>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${Cartctx.TotalAmount.toFixed(2)}`}</span>
      </div>
      {Chechout && (
        <CartForm
          onConfirm={ConfirmCartHandler}
          onClick={props.onClick}
        ></CartForm>
      )}
      {!Chechout && (
        <div className={classes.actions}>
          <button onClick={props.onClick}>Close</button>
          <button onClick={CheckoutHandler}>Order</button>
        </div>
      )}
    </React.Fragment>
  );

  return (
    <Modal onClick={props.onClick}>
      {!SubmitOrder && BeforeSubmit}
      {SubmitOrder && aftersubmit}
    </Modal>
  );
};

export default Cart;
