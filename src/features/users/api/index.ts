import axios from "axios";
import type { User } from "../model/types";

const API_URL = "https://jsonplaceholder.typicode.com/users"

export const usersApi = {
  getAll: () => axios.get<User[]>(API_URL),
  getById: (id: number) => axios.get<User>(`${API_URL}/${id}`),
  create: (user: Omit<User, 'id'>) => axios.post<User>(API_URL, user),
  update: (user: User) => axios.put<User>(`${API_URL}/${user.id}`, user),
  remove: (id: number) => axios.delete(`${API_URL}/${id}`)
};