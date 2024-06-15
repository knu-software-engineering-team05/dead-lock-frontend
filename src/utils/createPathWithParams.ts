export const createPathWithParams = (path: string, params: Record<string, string | number>) => {
  return Object.entries(params).reduce((acc, [key, value]) => {
    return acc.replace(`:${key}`, value.toString());
  }, path);
};
