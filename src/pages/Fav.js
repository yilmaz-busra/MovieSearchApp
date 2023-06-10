import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

function Fav({ fav, setFav }) {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="title">FAVORITE LIST</h3>
      <div className="list-container">
        {fav.map((movie) => {
          return (
            <div className="card " key={movie.imdbID}>
              <button
                className="favo"
                onClick={() => {
                  const newList = fav.filter(
                    (item) => item.imdbID !== movie.imdbID
                  );
                  setFav(newList);
                }}
              >
                <AiFillHeart />
              </button>
              <div>
                <div
                  onClick={() => navigate(`/${movie.imdbID}`)}
                  className="m-image"
                >
                  <img src={movie.Poster} alt="" />
                </div>
                <div className="info-style">
                  <h6>{movie.Title}</h6>
                  <h6>{movie.Year}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Fav;
