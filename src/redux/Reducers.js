const initialState = {
  categories: [],
  available: [],
  instructions: []
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORIES_FETCH":
      return { ...state, categories: [...state.categories, ...action.payload] };
    case "AVAILABLE_MEALS":
      return { ...state, available: [...state.available, ...action.payload] };
    case "MEAL_INSTRUCTIONS":
      return {
        ...state,
        instructions: [...state.instructions, ...action.payload]
      };

    default:
      return state;
  }
};

export default Reducers;
