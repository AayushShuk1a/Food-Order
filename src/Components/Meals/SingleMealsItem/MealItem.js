import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Itemscontext from "../../../Store/Itemscontext";

const MealItem = (props) => {
  const CartCtx = useContext(Itemscontext);

  const AddItemHandler = (amount) => {
    CartCtx.AddItem({
      name: props.name,
      price: props.price,
      amount: amount,
      id: props.id,
    });
  };

  const editPrice = `$${props.price}`;
  return (
    <li className={classes.meal}>
      <div>
        <div>{props.name}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{editPrice}</div>
      </div>
      <div>
        <MealItemForm onAddItem={AddItemHandler} id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
