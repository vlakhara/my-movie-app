import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import MovieDetail from "./MovieDetail"

const MovieCard = ({ movie }) => {
  const [open, setOpen] = useState(false)

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card
        sx={{
          minHeight: "25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "primary",
          borderRadius: 3,
        }}
      >
        <Box>
          <CardMedia
            image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            title="green iguana"
            sx={{
              height: 140,
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" color="text.main">
              {movie?.title?.length > 30
                ? movie?.title?.substring(0, 30) + "..."
                : movie?.title}
            </Typography>
            <Typography variant="body2" color="text.main">
              {movie?.release_date}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ marginX: 2, marginBottom: 1, gap: 1 }}>
          <Rating
            precision={0.5}
            defaultValue={Math.ceil(movie.vote_average) / 2}
            size="large"
            readOnly={true}
          />
          <Typography
            variant="subtitle2"
            sx={{ marginX: 0.5 }}
            color="text.main"
          >
            Votes : {movie?.vote_count}
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: 1, color: "secondary" }}
            size="small"
            onClick={() => setOpen(true)}
          >
            View More
          </Button>
        </Box>
      </Card>
      <MovieDetail
        data={movie}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </Grid>
  )
}

export default MovieCard
