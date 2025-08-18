import { createAsyncThunk } from "@reduxjs/toolkit"
import type { Countrie } from "./types"
import { countriesApi } from "../api"

export const fetchCountrie = createAsyncThunk(
  'countries/fetchCountrie',
  async (name: string) : Promise<Countrie> => {
    const res = await countriesApi.getByName(name)
    return res.data
  }
)

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (region: string) : Promise<Countrie[]> => {
    const res = await countriesApi.getByRegion(region)
    return res.data
  }
)