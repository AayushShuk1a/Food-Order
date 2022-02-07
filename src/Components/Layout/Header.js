import React, { Fragment } from "react";
import foodImage from "../../Assests/meals.jpg";
import CartButton from "./CartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onClick} />
      </header>
      <img
        src={foodImage}
        alt="Food on table"
        className={classes["main-image"]}
      ></img>
    </Fragment>
  );
};

export default Header;
