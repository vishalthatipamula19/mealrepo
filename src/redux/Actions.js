const fetchCategories = (response) => {
  return {
    type: "CATEGORIES_FETCH",
    payload: response
  };
};

const availableMealsAction = (response) => {
  return {
    type: "AVAILABLE_MEALS",
    payload: response
  };
};

const instructionsAction = (response) => {
  return {
    type: "MEAL_INSTRUCTIONS",
    payload: response
  };
};

export { fetchCategories };
export { availableMealsAction };
export { instructionsAction };
