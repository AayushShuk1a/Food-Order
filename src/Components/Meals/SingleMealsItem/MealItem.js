import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const editPrice = `$${props.price}`;
  return (
    <li className={classes.meal}>
      <div>
        <div>{props.name}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{editPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
