export async function handleResponse(response) {
  if (response.status === 200) {
    return response;
  }
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}

export function getRequestHeaders() {
  let sessionToken = "bWlmb3M6cGFzc3dvcmQ="; //TODO pick this from localStorage or browser cookies
  return {
    headers: {
      Authorization: `Basic ${sessionToken}`,
      Accept: "application/json"
    }
  };
}
