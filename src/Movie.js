import React, { useState, useEffect } from "react";
import axios from "axios";
import "./movie.css";
import Banner from "./Banner";
function Movie({ url, title, largeSize }) {
  const [movies, setMovies] = useState([]);
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  const API_KEY = "b1424604d5bec6c9a0fdd2b3623e8b4e";

  const category = "trending";
  const baseUrl = `https://api.themoviedb.org/3/${url}`;

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setMovies(res.data.results))
      .catch((e) => alert(e.alert));
  }, []);

  return (
    <div className='custom-rows'>
      <h2>{title}</h2>
      <div className="main_div">
        {movies.map((movie) => (
          <img key={movie.id}
            className={`movie__img ${largeSize && "movie__lg-img "}`}
            src={`${IMG_URL}${
              largeSize ? movie.poster_path : movie.backdrop_path
            }`}
          />
        ))}
        <hr />
      </div>
    </div>
  );
}

export default Movie;
