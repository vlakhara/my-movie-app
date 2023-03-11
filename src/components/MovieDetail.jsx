import { Box, Button, Grid, Modal, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { getVideos } from "../hooks/useApi"

const MovieDetail = ({ open, handleClose, data }) => {
  const [trailerLink, setTrailerLink] = useState()
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "primary.main",
    color: "secondary.main",
    boxShadow: 24,
    borderRadius: 1,
    p: 4,
  }
  useEffect(() => {
    getVideos(data?.id).then((res) => {
      const trailer = res?.data?.results.filter(
        (item) => item?.type === "Trailer"
      )[0].key
      setTrailerLink(trailer)
    })
  })
  return (
    <Modal open={open} onClose={handleClose}>
      <Grid container sx={style}>
        <Grid item md={6}>
          <img
            component="img"
            alt="Not found"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            style={{
              height: 450,
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6">{data?.title}</Typography>
            <Typography sx={{ mt: 2 }}>{data?.overview}</Typography>
          </Box>
          <Button
            onClick={() => {
              window.open(`https://www.youtube.com/watch?v=${trailerLink}`)
            }}
            variant="contained"
            color="secondary"
            fullWidth={true}
            sx={{
              p: 1.5,
              letterSpacing: "1.5px",
            }}
          >
            Watch Trailer
          </Button>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default MovieDetail
