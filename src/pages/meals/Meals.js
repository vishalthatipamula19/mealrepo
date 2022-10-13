import axios from "axios";
import React, { useEffect } from "react";
import { availableMealsAction } from "../../redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import MealCard from "../../components/MealCard";
import { useParams } from "react-router";

const Meals = () => {
  const dispatch = useDispatch();
  const availableMealsState = useSelector(
    (state) => state.reducerVal.available
  );
  useEffect(() => {
    availableMeals();
  }, []);
  const availableMeals = async () => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${a.categoryName}`
      );
      console.log(response);
      dispatch(availableMealsAction(response.data.meals));
    } catch (error) {
      console.log(error);
    }
  };
  const a = useParams();

  return (
    <div>
      {availableMealsState.map((item, index) => {
        return (
          <MealCard
            name={item.strMeal}
            image={item.strMealThumb}
            id={item.idMeal}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Meals;
