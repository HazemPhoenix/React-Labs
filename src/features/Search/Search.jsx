import React, { useState } from "react";

function Search({ fetchPopularMovies, setMovies, setIsLoading, setError }) {
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchMovieByTitle(title) {
    try {
      setIsLoading(true);
      const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmY1ZGI0ZGU4MGY2NGQzOTY1ODg4MWQ4YzkyMzZhZCIsIm5iZiI6MTc0ODQyNzMyOC4xODEsInN1YiI6IjY4MzZlMjQwYTllYTIwYWVkZjAzN2Y3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CQ8zo-OjOHFi0Z4-aCWQ9jf59I2ug21XOh7x4l7UYg4",
        },
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const m = (await response.json()).results;

      return m;
    } catch (error) {
      setError(`Error: ${error.message}`);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      if (searchTerm.trim()) {
        const m = await fetchMovieByTitle(searchTerm);
        setMovies(m);
      } else {
        const m = await fetchPopularMovies();
        setMovies(m);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchTerm = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  return (
    <div className="border border-gray-600 p-6 flex flex-col gap-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Welcome to our movie app
      </h1>
      <p className="text-gray-300 text-lg">
        Millions of movies, TV shows and people to discover. Explore now!
      </p>
      <form onSubmit={handleSearch} className="flex gap-3 flex-col md:flex-row">
        <input
          type="text"
          onChange={handleSearchTerm}
          value={searchTerm}
          className="flex-1 text-2xl px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
          placeholder="Search for movies..."
        />
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-md cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
