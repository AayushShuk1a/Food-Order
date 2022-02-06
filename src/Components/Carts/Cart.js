import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: 1, name: "shushi", amount: 2, price: 12.33 }].map((items) => (
        <li key={items.id}>{items.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
