import { Container, Pagination, ThemeProvider } from "@mui/material"

import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import Gernes from "../components/Genres"
import Movies from "../components/Movies"
import { useMoviesContext } from "../hooks/useMoviesContext"
import { themeDark, themeLight } from "../style/MyTheme"
import { getMovies } from "../hooks/useApi"

const Layout = () => {
  const [gerneId, setGerneId] = useState()
  const [search, setSearch] = useState()
  const [loading, setLoading] = useState(false)
  const { isDarkTheme, setMovies } = useMoviesContext()
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    setLoading(true)
    const response = getMovies(currentPage)
    response.then((res) => {
      const { results } = res?.data
      setMovies(results)
    })
  }, [currentPage, setMovies])
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          minHeight: "100vh",
          backgroundColor: "primary.main",
          textAlign: "center",
          p: "1rem",
        }}
      >
        <Header getSearch={setSearch} />
        <Gernes getGerneId={setGerneId} />
        <Movies gerneId={gerneId} search={search} />
        <Pagination
          count={500}
          color="secondary"
          variant="text"
          shape="rounded"
          size="large"
          page={currentPage}
          onChange={(event, value) => {
            setCurrentPage(value)
            window.scrollTo(0, 0)
          }}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: 2,
          }}
        />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
