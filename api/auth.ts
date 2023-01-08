import axios from "axios";
import { NEXT_PUBLIC_CIBUS_API } from "../constants";

export const createUserAccount = (body: object) => {
  return axios.post(`${NEXT_PUBLIC_CIBUS_API}/register`, body);
};
