import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import FoodListings from "pages/FoodListings";
import Login from "pages/Login";
import store from "store/store";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route
          path="/foodListings"
          exact
          element={
            store.getState()?.listings ? (
              <FoodListings />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
      </Routes>
    </Router>
    // </Provider>
  );
}
