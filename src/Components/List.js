import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

function List({ movies, fav, setFav }) {
  const navigate = useNavigate();
  if (movies.length < 1) {
    return (
      <div className="imgstyle">
        <img
          src="https://i.giphy.com/media/LgebvLtO5ahTfutKUy/giphy.webp"
          alt=""
        />
      </div>
    );
  } else {
    return (
      <div className="list-container">
        {movies.map((movie) => {
          let existingMovie = fav.findIndex(
            (item) => item.imdbID === movie.imdbID
          );
          if (existingMovie !== -1) {
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
          } else {
            return (
              <div className="card " key={movie.imdbID}>
                <button
                  onClick={() => {
                    setFav([...fav, movie]);
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
          }
        })}
      </div>
    );
  }
}

export default List;
