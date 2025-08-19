import { createAsyncThunk } from "@reduxjs/toolkit"
import type { Countrie, Region } from "./types"
import { countriesApi } from "../api"


export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (region: Region) : Promise<Countrie[]> => {
    const res = await countriesApi.getByRegion(region)
    return res.data
  }
)

export const fetchCountrie = createAsyncThunk(
  'countries/fetchCountrie',
  async (name: string) : Promise<Countrie> => {
    const res = await countriesApi.getByName(name)
    return res.data[0]
  }
)