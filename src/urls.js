import { API_KEY } from "./components/constants/constants";

export const newReleases = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const actions = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const horrors = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const comedies = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const documentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`
export const romances = `/discover/movie?api_key=${API_KEY}&with_genres=10749`

export const moviesVideos = `/movie/${'movieID'}/videos?api_key=${API_KEY}&language=en-US`
