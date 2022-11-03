import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FoodListings from "pages/FoodListings";
import Login from "pages/Login";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/foodListings" exact element={<FoodListings />} />
      </Routes>
    </Router>
    // </Provider>
  );
}
