import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MoviesShow from "./MoviesShow";

function MoviesPage({ movies }) {

  const match = useRouteMatch();
   
  return (
    <div>
      <MoviesList movies={movies} />
        
         <Route path={match.url}>
          <h3>Choose the movie which delights you the most</h3>
         </Route>
      <Route path={`${match.url}/:movieId`}>
        <MoviesShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
