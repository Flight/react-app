import { get } from "../helpers/http";
import type { User } from "../typings/User";
import { API_BASE_URL } from "./urls";

export const getUser = (): Promise<User> => get(`${API_BASE_URL}/user`);
