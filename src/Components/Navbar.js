import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";

function Navbar({ setMovies }) {
  const [initialSearch, setInitialSearch] = useState("");
  const navigate = useNavigate();
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fetch(`https://www.omdbapi.com/?s=${initialSearch}&apikey=f9a0aaf6`)
        .then((resp) => resp.json())
        .then((data) => {
          if (data["Response"] === "False") {
            alert("NOT FOUND");
          } else {
            navigate("/");
            setMovies(data["Search"]);
            setInitialSearch("");
          }
        });
    }
  };
  return (
    <div className="head-nav">
      <ul className="nav-list">
        <li>
          <Link to={"/"} className="stylink">
            All Movies
          </Link>
        </li>
        <li>
          <Link className="stylink">Category</Link>
        </li>
        <li>
          <Link className="stylink" to={"/fav"}>
            My Favorites
          </Link>
        </li>
      </ul>

      <div className="div-input">
        <ImSearch className="forcolor" />
        <input
          value={initialSearch}
          onChange={(e) => {
            setInitialSearch(e.target.value);
          }}
          onKeyDown={handleEnter}
          placeholder="Search for movies"
        />
      </div>
    </div>
  );
}

export default Navbar;
