import "./styles.css";
import Categories from "./pages/categories/Categories";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import Meals from "./pages/meals/Meals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MealInstructions from "./pages/mealInstructions/MealInstructions";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/meals/:categoryName" component={Meals} />
            <Route path="/meal/:id" component={MealInstructions} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}
