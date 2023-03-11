import { createContext, useState } from "react"

export const Context = createContext({})

export const MoviesContext = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <Context.Provider
      value={{
        movies,
        setMovies,
        isDarkTheme,
        setIsDarkTheme,
      }}
    >
      {children}
    </Context.Provider>
  )
}
