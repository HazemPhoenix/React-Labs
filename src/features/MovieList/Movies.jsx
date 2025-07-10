import React from "react";
import Movie from "./Movie";

function Movies({ movies }) {
  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap gap-7 mt-8 justify-center items-center bg-gray-900 p-8 rounded-lg">
      {movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </ul>
  );
}

export default Movies;
