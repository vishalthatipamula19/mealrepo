import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/Actions";
import MealCard from "../../components/MealCard";

const Categories = () => {
  useEffect(() => {
    fetchMealsCategories();
  }, []);
  const dispatch = useDispatch();
  const mealCategories = useSelector((state) => state.reducerVal.categories);

  const fetchMealsCategories = async () => {
    try {
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );
      dispatch(fetchCategories(response.data.categories));
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (valueImp) => {
    console.log(valueImp);
  };

  return (
    <div>
      {mealCategories.map((item, index) => {
        return (
          <MealCard
            name={item.strCategory}
            image={item.strCategoryThumb}
            description={item.strCategoryDescription}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Categories;
