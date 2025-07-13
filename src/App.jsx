import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./features/Home/Home";
import MovieDetails from "./features/MovieList/MovieDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
