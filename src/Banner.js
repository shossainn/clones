import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
// import { truncate } from "fs/promises";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflix0riginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner__contents">
        {" "}
        {/* background image of the banner */}
        {/* Tittle of the banner goes here */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        {/* Buttons goes here  */}
        <div classname="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More Info</button>
        </div>
        {/* summary about the movie  */}
        <h1 clasName="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div classname="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
