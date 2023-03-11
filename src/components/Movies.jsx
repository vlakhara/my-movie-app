import { Container, Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useMoviesContext } from "../hooks/useMoviesContext"
import MovieCard from "./MovieCard"
import NoMovieFound from "./NoMovieFound"

const Movies = ({ gerneId, search }) => {
  const [filteredMovies, setFilteredMovies] = useState([])
  const { movies } = useMoviesContext()
  useEffect(() => {
    setFilteredMovies(
      movies
        ?.filter((item) =>
          gerneId ? item?.genre_ids?.includes(gerneId) : item
        )
        ?.filter((item) =>
          search?.trim().length > 0
            ? search
              ? item?.title?.toLowerCase()?.includes(search.toLowerCase())
              : item
            : item
        )
    )
  }, [gerneId, search, movies])
  return (
    <Container maxWidth="md">
      <Grid container spacing={2} sx={{ paddingBottom: "1rem" }}>
        {(gerneId || search) && filteredMovies?.length === 0 && (
          <NoMovieFound />
        )}
        {filteredMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Container>
  )
}

export default Movies
