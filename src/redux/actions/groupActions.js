import * as groupApi from "../../api/groupApi";

export const LOAD_GROUPS = "LOAD_GROUPS";

export function loadGroupsSuccess(groups) {
  return { type: LOAD_GROUPS, groups };
}

export function loadGroups() {
  return function (dispatch) {
    return groupApi
      .getGroups()
      .then((response) => {
        dispatch(loadGroupsSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
