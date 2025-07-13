import React from "react";
import { Link } from "react-router-dom";

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
        <h3 className="text-white text-2xl font-semibold mb-2">
          {movie.title}
        </h3>
        <div className="flex flex-row justify-between mt-2 w-5/6">
          <div>
            <p className="text-yellow-400 font-medium">
              <i className="fa-solid fa-star"></i> {movie.vote_average}
            </p>
            <p className="text-gray-400 text-md  mt-1">{movie.release_date}</p>
          </div>
          <Link
            to="/details"
            state={movie}
            className="border-1 px-5 rounded-xl cursor-pointer flex justify-center items-center hover:bg-gray-200 hover:text-gray-800 font-black transition-all duration-200"
          >
            Details
          </Link>
        </div>
      </div>
    </li>
  );
}

export default Movie;
