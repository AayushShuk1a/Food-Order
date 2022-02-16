import classes from "./AvailableMeals.module.css";
import MealItem from "./SingleMealsItem/MealItem";
import Card from "../../Components/UI/Card";
import { useEffect, useState } from "react";

const Availablemeals = () => {
  const [meals, setmeals] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [HttpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMealshandler = async () => {
      const response = await fetch(
        "https://meals-fef63-default-rtdb.firebaseio.com/Meals.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await response.json();

      let mealsitems = [];
      for (const key in data) {
        mealsitems.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setmeals(mealsitems);
      setIsLoading(false);
    };
    fetchMealshandler().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (IsLoading) {
    return (
      <Card className={classes.meals}>
        <p>Loading...</p>
      </Card>
    );
  }
  if (HttpError) {
    return (
      <Card className={classes.meals}>
        <p>error</p>
      </Card>
    );
  }
  const MealsList = meals.map((meals) => (
    <MealItem
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={+meals.price}
      id={meals.id}
    />
  ));
  return (
    <ul className={classes.meals}>
      <Card>{MealsList}</Card>
    </ul>
  );
};

export default Availablemeals;
