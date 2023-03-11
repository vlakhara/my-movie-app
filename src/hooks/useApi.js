import axios from "axios"

const API_KEY = "144f6087e03002cc3af283b78ee6050d"

export const getMovies = async (page) => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&append_to_response=videos`
  )
}
export const getVideos = async (movieId) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  )
}
