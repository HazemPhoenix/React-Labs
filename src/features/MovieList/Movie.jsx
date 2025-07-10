import React from "react";

function Movie({ movie }) {
  return (
    <li
      key={movie.id}
      className="bg-gray-800 border border-gray-700 rounded-lg p-5 shadow-lg"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg mb-4 shadow-md"
        />
        <h3 className="text-white text-lg font-semibold mb-2">{movie.title}</h3>
        <p className="text-gray-400 text-sm mb-1">{movie.release_date}</p>
        <p className="text-yellow-400 font-medium">
          <i class="fa-solid fa-star"></i> {movie.vote_average}
        </p>
      </div>
    </li>
  );
}

export default Movie;
