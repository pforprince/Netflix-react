import React, { useEffect, useState } from "react";
import axios from "axios";
import movieCategory from "./properties";
import "./movie.css";
import Navbar from "./Navbar";

function Banner() {
  const IMG_URL = "https://image.tmdb.org/t/p/original";

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const [mainMovie, setMainMovie] = useState({});

  const index = React.useRef(Math.floor(Math.random() * Math.floor(19)));

  useEffect(() => {
    console.log(index);
    async function loadBanner() {
      let val = movieCategory.upcoming;
      await axios
        .get(`https://api.themoviedb.org/3/${val}`)
        .then((res) => setMainMovie(res.data.results[index.current]))
        .catch((e) => alert(e.message));
    }
    loadBanner();
  }, []);
  let imgPath = `${IMG_URL}${mainMovie.backdrop_path}`;

  return (
    <header
      className="Banner__bg"
      style={{ backgroundImage: `url(${IMG_URL}${mainMovie.backdrop_path})` }}
    >
      <Navbar />
      <div className="banner__contents">
        <h1 className="banner__title">{mainMovie.title}</h1>
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
        <p className="banner__overview">{truncate(mainMovie.overview, 150)}</p>
      </div>
      <div className="black__shadow"></div>
    </header>
  );
}

export default Banner;
