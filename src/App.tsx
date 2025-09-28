import "./App.css";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import Hero from "./Components/Main/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
