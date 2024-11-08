export const clearCacheByPath = async (path: string) => {
  const response = await fetch(`/api/cache`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "path", value: path }),
  });
  return response.ok;
};

export const clearCacheByTags = async (tag: string) => {
  const response = await fetch(`/api/cache`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "tags", value: tag }),
  });
  return response.ok;
};
