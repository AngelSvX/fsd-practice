import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User, UsersState } from "./types"
import { fetchUser, fetchUsers } from "./thunks"

const initialState : UsersState = {
  userList: [],
  selectedUser: null ,
  loading: false,
  error: null
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true,
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false
        state.userList = action.payload
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false
        state.error = "Error fetching data"
      })
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true,
        state.error = null
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false,
        state.selectedUser = action.payload
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = false,
        state.error = "Ocurrió un error recopilando información del usuario"
      })
  }
})

export default usersSlice.reducer