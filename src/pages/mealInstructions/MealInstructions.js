import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instructionsAction } from "../../redux/Actions";
import MealCard from "../../components/MealCard";
import { useParams } from "react-router";

const MealInstructions = () => {
  useEffect(() => {
    fetchMealsInstructions();
  }, []);
  const dispatch = useDispatch();
  const instructionsState = useSelector(
    (state) => state.reducerVal.instructions
  );
  const instrId = useParams();

  const fetchMealsInstructions = async () => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${instrId.id}`
      );
      dispatch(instructionsAction(response.data.meals));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {instructionsState.map((item, index) => {
        return (
          <MealCard
            name={item.strMeal}
            image={item.strMealThumb}
            description={item.strInstructions}
            id={item.idMeal}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default MealInstructions;
