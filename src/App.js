import React from "react"
import { MoviesContext } from "./context/MyContext"
import Layout from "./layout/Layout"
const App = () => {
  return (
    <MoviesContext>
      <Layout />
    </MoviesContext>
  )
}

export default App
