import React from "react";
import List from "../Components/List";

function Main({ movies, fav, setFav }) {
  return (
    <div>
      <List movies={movies} fav={fav} setFav={setFav} />
    </div>
  );
}

export default Main;
