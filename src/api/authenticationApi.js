import qs from "qs";
import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authentication";

export async function authenticate(authData) {
  try {
    const response = await axios.post(baseUrl, qs.stringify(authData), {
      headers: {
        Accept: "application/json"
      }
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}
