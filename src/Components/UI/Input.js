import { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.Input.id}>{props.label}</label>
      <input ref={ref} {...props.Input}></input>
    </div>
  );
});

export default Input;
