import axios from "axios"

const API_URL = "https://restcountries.com/v3.1"

export const countriesApi = {
  getByName : (name: string) => axios.get(`${API_URL}/name/${name}`),
  getByRegion: (region: string) => axios.get(`${API_URL}/region/${region}`)
}