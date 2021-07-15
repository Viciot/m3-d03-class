import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";

import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {

  const [moviesData, setMoviesData] = useState(moviesDataJSON);
  const [movies, setMovies] = useState(moviesDataJSON);


  function addMovie(newMovie){
    const updatedMovieData = [...moviesData, newMovie]
    {/*this is equivalent to moviesData.concat([newMovie])
    copy, modify and  */}
    setMoviesData(updatedMovieData)
  }




  const filterMovieList = (str) => {
    let filteredMovies;
    if (str === "All") {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }

    setMovies(filteredMovies);
  };

  return (
    <div>
      <FilterMovies filterMovies={filterMovieList} />
      <AddMovie addMovieHandler={addMovie}/>
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
