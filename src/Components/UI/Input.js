import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.Input.id}>{props.label}</label>
      <input {...props.Input}></input>
    </div>
  );
};

export default Input;
