import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Countrie, CountriesState, Region } from "./types";
import { fetchCountrie, fetchCountries } from "./thunks";

export const initialState: CountriesState = {
  countrieList: [],
  selectedRegion: "Europe" ,
  selectedCountrie: null,
  loading: false,
  error: null
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<Region>) => {
      state.selectedRegion = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true,
        state.error = null
      })
      .addCase(fetchCountries.fulfilled, (state, action: PayloadAction<Countrie[]>) => {
        state.loading = false,
        state.countrieList = action.payload
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.loading = false,
        state.error = "An Error has rejected fetching Countries"
      })
    builder
      .addCase(fetchCountrie.pending, (state) => {
        state.loading = true,
        state.error = null
      })
      .addCase(fetchCountrie.fulfilled, (state, action : PayloadAction<Countrie>) => {
        state.loading = false,
        state.selectedCountrie = action.payload
      })
      .addCase(fetchCountrie.rejected, (state) => {
        state.loading = false,
        state.error = "An error has ocurred fetching the countrie data."
      })
  }
})

export const { setRegion } = countriesSlice.actions
export default countriesSlice.reducer