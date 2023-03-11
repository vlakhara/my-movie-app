import { useContext } from "react"
import { Context } from "../context/MyContext"

export const useMoviesContext = () => {
  const context = useContext(Context)
  return context
}
