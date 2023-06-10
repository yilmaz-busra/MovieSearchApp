import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

function FilmAbout({ fav, setFav }) {
  const { id } = useParams();

  const [film, setFilm] = useState({});

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=f9a0aaf6`)
      .then((res) => res.json())
      .then((data) => setFilm(data));
  }, [id]);
  return (
    <div className="container-film">
      <div>
        <img src={film.Poster} alt="" />
      </div>

      <div className="detail">
        <div>
          <h2>{film.Title}</h2>
          <p>
            <span>Year: </span>
            {film.Year}
          </p>
        </div>
        <div className="details-cont">
          <p>
            <span>About: </span>
            {film.Plot}
          </p>
          <p>
            <span>Director: </span>
            {film.Director}
          </p>
          <p>
            <span>Actors: </span> {film.Actors}
          </p>

          <button
            onClick={() => {
              let existingMovie = fav.findIndex(
                (item) => item.imdbID === film.imdbID
              );
              if (existingMovie === -1) {
                setFav([...fav, film]);
              }
            }}
          >
            Add Favorite <AiFillHeart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilmAbout;
