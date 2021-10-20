export const get = async <T>(request: RequestInfo): Promise<T> => {
  // TODO: Add caching for the same requests
  const response = await fetch(request);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const body = await response.json();
  return body;
};
