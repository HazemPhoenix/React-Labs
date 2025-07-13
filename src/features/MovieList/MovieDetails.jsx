import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MovieDetails() {
  const [genres, setGenres] = useState([]);

  const loc = useLocation();
  const movie = loc.state;

  useEffect(() => {
    (async function () {
      const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmY1ZGI0ZGU4MGY2NGQzOTY1ODg4MWQ4YzkyMzZhZCIsIm5iZiI6MTc0ODQyNzMyOC4xODEsInN1YiI6IjY4MzZlMjQwYTllYTIwYWVkZjAzN2Y3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CQ8zo-OjOHFi0Z4-aCWQ9jf59I2ug21XOh7x4l7UYg4",
        },
      };
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        const allGenres = data.genres;

        const movieGenreNames = movie.genre_ids.map((id) => {
          const genre = allGenres.filter((g) => {
            return g.id == id;
          });
          return genre[0].name;
        });
        setGenres(movieGenreNames);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-12 mt-16 flex flex-col md:flex-row gap-12 items-center">
      <img
        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
        alt={movie.title}
        className="rounded-xl shadow-lg w-80 h-auto object-cover border-4 border-gray-200 dark:border-gray-700"
      />
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white flex items-center gap-4">
          <i className="fa-solid fa-film text-indigo-500 text-4xl"></i>
          {movie.title}
        </h1>
        <h2 className="text-2xl text-gray-500 dark:text-gray-300 flex items-center gap-3">
          <i className="fa-regular fa-calendar text-blue-400 text-xl"></i>
          {movie.release_date}
        </h2>
        <div className="flex flex-wrap gap-3 mt-3">
          {genres.map((genre) => (
            <span
              key={genre}
              className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-4 py-2 rounded-full text-base font-semibold flex items-center gap-2 shadow-sm"
            >
              <i className="fa-solid fa-tag"></i> {genre}
            </span>
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-lg mt-3 leading-relaxed">
          {movie.overview}
        </p>
        <div className="flex items-center gap-8 mt-4">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-star text-amber-400 text-2xl"></i>
            <span className="font-bold text-2xl text-gray-800 dark:text-white">
              {movie.vote_average}
            </span>
            <span className="text-base text-gray-500 dark:text-gray-400">
              ({movie.vote_count})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-fire text-red-500 text-xl"></i>
            <span className="text-base text-gray-600 dark:text-gray-300">
              Popularity: {movie.popularity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
