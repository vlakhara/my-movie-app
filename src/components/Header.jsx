import * as React from "react"
import { useRef, useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import MovieFilterIcon from "@mui/icons-material/MovieFilter"
import { AppBar, Box, InputAdornment, TextField } from "@mui/material"
import { DarkMode, LightMode, Search } from "@mui/icons-material"
import { useMoviesContext } from "../hooks/useMoviesContext"

function Header({ getSearch }) {
  const [value, setValue] = useState()
  const searchRef = useRef()
  const { isDarkTheme, setIsDarkTheme } = useMoviesContext()
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearch(searchRef.current.value)
    }, [1000])
    return () => {
      clearTimeout(timer)
    }
  }, [value, getSearch])
  return (
    <AppBar>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "1rem",
          userSelect: "none",
          gap: { xs: 3, sm: "unset" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          color="secondary"
          href="/"
          sx={{
            mr: 2,
            display: "flex",
            alignItems: "center",
            fontWeight: 700,
            letterSpacing: ".3rem",
            textDecoration: "none",
          }}
        >
          <MovieFilterIcon sx={{ display: { md: "flex" }, mr: 1 }} />
          MOVIESS
        </Typography>
        <Box
          sx={{
            width: { sm: "50%", xs: "100%" },
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <TextField
            variant="filled"
            inputRef={searchRef}
            size="small"
            sx={{
              flexGrow: 1,
            }}
            placeholder="Search movie"
            onChange={setValue}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="secondary" />
                </InputAdornment>
              ),
              sx: {
                color: "secondary.main",
                pl: 2,
                pb: 1,
                pr: 2,
              },
            }}
          />
          {isDarkTheme ? (
            <LightMode
              color="secondary"
              fontSize="large"
              onClick={() => {
                setIsDarkTheme(false)
              }}
              sx={{ cursor: "pointer" }}
            />
          ) : (
            <DarkMode
              color="secondary"
              fontSize="large"
              onClick={() => {
                setIsDarkTheme(true)
              }}
              sx={{ cursor: "pointer" }}
            />
          )}
        </Box>
      </Container>
    </AppBar>
  )
}
export default Header
