import { createAsyncThunk } from "@reduxjs/toolkit"
import type { User } from "./types"
import { usersApi } from "../api"

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () : Promise<User[]> => {
    const res = await usersApi.getAll()
    return res.data
  }
)

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (id: number) : Promise<User> => {
    const res = await usersApi.getById(id)
    return res.data
  }
)