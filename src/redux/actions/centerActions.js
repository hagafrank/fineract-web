import * as centerApi from "../../api/centerApi";

export const LOAD_CENTERS = "LOAD_CENTERS";

export function loadCentersSuccess(centers) {
  return { type: LOAD_CENTERS, centers };
}

export function loadCenters() {
  return function (dispatch) {
    return centerApi
      .getCenters()
      .then((response) => {
        dispatch(loadCentersSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
