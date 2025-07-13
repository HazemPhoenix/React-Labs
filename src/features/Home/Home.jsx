import React, { useEffect, useReducer } from "react";
import Search from "../Search/Search";
import Movies from "../MovieList/Movies";

const initialState = {
  movies: [],
  isLoading: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "setMovies":
      return { ...state, movies: action.payload };
    case "setIsLoading":
      return { ...state, isLoading: action.payload };
    case "setError":
      return { ...state, error: action.payload };
    default:
      throw new Error("Invalid action type");
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchPopularMovies() {
    try {
      dispatch({ type: "setIsLoading", payload: true });
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
      dispatch({ type: "setError", payload: error.message });
      throw error;
    } finally {
      dispatch({ type: "setIsLoading", payload: false });
    }
  }
  useEffect(() => {
    fetchPopularMovies().then((data) =>
      dispatch({ type: "setMovies", payload: data })
    );
  }, []);
  return (
    <div className="md:w-5/6 mx-auto mt-5">
      <Search fetchPopularMovies={fetchPopularMovies} dispatch={dispatch} />
      {state.isLoading && !state.error && (
        <p className="text-center text-gray-500 text-4xl mt-8">Loading...</p>
      )}
      {state.error && (
        <p className="text-center text-red-600 border-1 border-red-500 text-4xl mt-8 p-4 rounded-lg">
          {state.error}
        </p>
      )}
      {state.movies.length == 0 && !state.isLoading && (
        <p className="text-center text-gray-500 text-4xl mt-8 p-4">
          No Movies Found.
        </p>
      )}
      {!state.isLoading && !state.error && state.movies.length > 0 && (
        <Movies movies={state.movies} />
      )}
    </div>
  );
}

export default Home;
