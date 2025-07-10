import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import Movies from "../MovieList/Movies";

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchPopularMovies() {
    try {
      setIsLoading(true);
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmY1ZGI0ZGU4MGY2NGQzOTY1ODg4MWQ4YzkyMzZhZCIsIm5iZiI6MTc0ODQyNzMyOC4xODEsInN1YiI6IjY4MzZlMjQwYTllYTIwYWVkZjAzN2Y3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CQ8zo-OjOHFi0Z4-aCWQ9jf59I2ug21XOh7x4l7UYg4",
        },
      };
      const response = await fetch(url, options);
      const m = (await response.json()).results;
      return m;
    } catch (error) {
      setError(`Error: ${error.message}`);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchPopularMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div className="md:w-5/6 mx-auto mt-5">
      <Search
        fetchPopularMovies={fetchPopularMovies}
        setMovies={setMovies}
        setIsLoading={setIsLoading}
        setError={setError}
      />
      {isLoading && !error && (
        <p className="text-center text-gray-500 text-4xl mt-8">Loading...</p>
      )}
      {error && (
        <p className="text-center text-red-600 border-1 border-red-500 text-4xl mt-8 p-4 rounded-lg">
          {error}
        </p>
      )}
      {movies.length == 0 && !isLoading && (
        <p className="text-center text-gray-500 text-4xl mt-8 p-4">
          No Movies Found.
        </p>
      )}
      {!isLoading && !error && movies.length > 0 && <Movies movies={movies} />}
    </div>
  );
}

export default Home;
