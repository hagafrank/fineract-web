import axios from "axios";
import { handleResponse, handleError, getRequestHeaders } from "./apiUtils";
const baseUrl = process.env.API_URL + "/centers";

export function getCenters() {
  return axios
    .get(baseUrl, getRequestHeaders())
    .then((response) => handleResponse(response))
    .catch((error) => handleError(error));
}
