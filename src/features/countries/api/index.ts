import axios from "axios"
import type { Countrie } from "../model/types"

const API_URL = "https://restcountries.com/v3.1"

export const countriesApi = {
  getByName : (name: string) => axios.get<Countrie[]>(`${API_URL}/name/${name}`),
  getByRegion: (region: string) => axios.get<Countrie[]>(`${API_URL}/region/${region}`)
}