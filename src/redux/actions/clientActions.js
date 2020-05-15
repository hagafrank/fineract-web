import * as clientApi from "../../api/clientApi";

export const LOAD_CLIENTS = "LOAD_CLIENTS";

export function loadClientsSuccess(clients) {
  return { type: LOAD_CLIENTS, clients };
}

export function loadClients() {
  return function (dispatch) {
    return clientApi
      .getClients()
      .then((response) => {
        dispatch(loadClientsSuccess(response.data.pageItems));
      })
      .catch((error) => {
        throw error;
      });
  };
}
