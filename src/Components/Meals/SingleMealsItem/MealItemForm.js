import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef } from "react";

const MealItemForm = (props) => {
  const InputAmountRef = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const EnteredAmount = +InputAmountRef.current.value;
    props.onAddItem(EnteredAmount);
  };
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <Input
        ref={InputAmountRef}
        label="Amount"
        Input={{
          type: "number",
          min: 1,
          max: 5,
          id: props.id,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
