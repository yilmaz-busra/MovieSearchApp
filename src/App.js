import "./App.css";

import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Fav from "./pages/Fav";
import FilmAbout from "./pages/FilmAbout";

function App() {
  const [movies, setMovies] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    console.log(fav);
  }, [fav]);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar setMovies={setMovies} />

        <Routes>
          <Route
            path="/"
            element={<Main movies={movies} fav={fav} setFav={setFav} />}
          />

          <Route
            path="fav"
            element={<Fav fav={fav} setFav={setFav} movies={movies} />}
          />

          <Route
            path="/:id"
            element={<FilmAbout fav={fav} setFav={setFav} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
