import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Countrie, CountriesState } from "./types";
import { fetchCountries } from "./thunks";

export const initialState: CountriesState = {
  countrieList: [],
  selectedCountrie: null,
  loading: false,
  error: null
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
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
  }
})

export default countriesSlice.reducer