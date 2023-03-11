import { SearchOff } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"

const NoMovieFound = () => {
  return (
    <Container maxWidth="true" disableGutters>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: "10rem",
          mt: "4rem",
        }}
      >
        <Grid item md={12} textAlign="center" color="gray">
          <SearchOff sx={{ height: "5rem", width: "5rem" }} color="secondary" />
          <Typography color="secondary">No movie found</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NoMovieFound
