import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  //when the row loads in the screeen, this piece of code runs to load the contents from tmdb
  useEffect(() => {
    // if we leave [] blank, run once when the row loads and dont dont again

    async function fetchData() {
      // pretty much fetching Https://api.themoviedb.org/3//discover/tv?api_key=${API_KEY}&with_networks=213",
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      {/* titles */}
      <h2>{title}</h2>

      <div className="row__posters">
        {/* here goes the row posters*/}

        {movies.map(movie => (
          <img
            key={movie.id} //to optimize the speed how it moves
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* Container --> movie posters */}
    </div>
  );
}

export default Row;
