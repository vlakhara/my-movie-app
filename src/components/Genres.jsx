import React, { useState } from "react"
import { Container, Grid, Button, TextField, MenuItem } from "@mui/material"
import { Close, Remove } from "@mui/icons-material"

const Gernes = ({ getGerneId }) => {
  const [gerne, setGerne] = useState("")
  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ]
  const handleGerneSelect = (value, id) => {
    setGerne((prev) => {
      if (prev === value) {
        getGerneId(null)
        return ""
      } else {
        getGerneId(id)
        return value
      }
    })
  }
  return (
    <Container maxWidth="md" sx={{ mt: "5.7rem", mb: "1rem" }}>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        display={{ md: "flex", xs: "none" }}
      >
        {genres.map((item) => {
          return (
            <Grid key={item.id} item md={2.5} sx={{ textAlign: "center" }}>
              <Button
                color="secondary"
                variant={
                  gerne && gerne.length > 0
                    ? gerne === item.name
                      ? "contained"
                      : "outlined"
                    : "outlined"
                }
                sx={{
                  borderRadius: 5,
                  minWidth: "10rem",
                }}
                onClick={() => handleGerneSelect(item.name, item.id)}
              >
                {item.name}
              </Button>
            </Grid>
          )
        })}
      </Grid>
      <Grid
        container
        justifyContent="center"
        display={{ md: "none", xs: "flex" }}
        sx={{
          mt: { sm: "5rem", xs: "8rem" },
          mb: "1rem",
          width: "100%",
          padding: 2,
        }}
      >
        <TextField
          placeholder="Select Gerne"
          variant="outlined"
          color="secondary"
          select={true}
          value={gerne}
          sx={{ flexGrow: 1 }}
          onChange={(event) =>
            handleGerneSelect(
              event.target.value,
              genres.find((item) => item.name === event.target.value).id
            )
          }
        >
          {genres.map((gerne) => (
            <MenuItem key={gerne.id} value={gerne.name}>
              {gerne.name}
            </MenuItem>
          ))}
        </TextField>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            setGerne("")
            handleGerneSelect(null, null)
          }}
        >
          <Close color="secondary" sx={{ curson: "pointer" }} />
        </Button>
      </Grid>
    </Container>
  )
}

export default Gernes
