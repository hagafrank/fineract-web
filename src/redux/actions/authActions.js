import * as authApi from "../../api/authenticationApi";

export const LOAD_USER_SESSION = "LOAD_USER_SESSION";

export function loginUserSuccess(sessionData) {
  return { type: LOAD_USER_SESSION, sessionData };
}

export function authenticateUser(authData) {
  return function (dispatch) {
    return authApi
      .authenticate(authData)
      .then((response) => {
        dispatch(loginUserSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
