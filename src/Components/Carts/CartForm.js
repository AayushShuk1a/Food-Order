import { useRef, useState } from "react";
import classes from "./CartForm.module.css";

const isEmpty = (value) => {
  return value.trim() === "";
};
const isFivaChar = (value) => {
  return value.trim().length === 6;
};
const CartForm = (props) => {
  const [FormIsvalid, setFormIsValid] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const InputRef = useRef();
  const StreetRef = useRef();
  const PostalCodeRef = useRef();
  const CityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const Enteredname = InputRef.current.value;
    const EnteredStreet = StreetRef.current.value;
    const postalCode = PostalCodeRef.current.value;
    const EnteredCity = CityRef.current.value;

    const NameisValid = !isEmpty(Enteredname);
    const StrrtisValid = !isEmpty(EnteredStreet);
    const postalCodeisValid = isFivaChar(postalCode);
    const cityisValid = !isEmpty(EnteredCity);

    setFormIsValid({
      name: NameisValid,
      street: StrrtisValid,
      postalCode: postalCodeisValid,
      city: cityisValid,
    });
    const formIsValid =
      NameisValid && StrrtisValid && cityisValid && postalCodeisValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: Enteredname,
      street: EnteredCity,
      postalCode: postalCode,
      city: EnteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={InputRef} type="text" id="name" />
        {!FormIsvalid.name && <p>Invalid Name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input ref={StreetRef} type="text" id="street" />
        {!FormIsvalid.street && <p>Invalid Street</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={PostalCodeRef} type="text" id="postal" />
        {!FormIsvalid.postalCode && <p>Invalid Postal Code (five letters)</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input ref={CityRef} type="text" id="city" />
        {!FormIsvalid.city && <p>Invalid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClick}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CartForm;
