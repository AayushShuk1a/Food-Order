import { Fragment } from "react/cjs/react.production.min";
import Availablemeals from "./AvailableMeals";
import MealsSummary from "./MealSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <Availablemeals />
    </Fragment>
  );
};

export default Meals;
