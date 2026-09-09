// src/services/userService.ts
import axios from "axios";
import { User } from "../types";

export async function fetchUsers(): Promise<User[]> {
  const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
  return response.data;
}
