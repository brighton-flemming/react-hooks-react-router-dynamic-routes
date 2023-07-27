import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MoviesShow from "./MoviesShow";

function MoviesPage({ movies }) {

  const match = useRouteMatch();
   
  return (
    <div>
      <MoviesList movies={movies} />

      <Route path={`${match.url}/:movieId`}>
      </Route>
    </div>
  );
}
export default MoviesPage;
