export const getCurrentLocation = (url: string): string | undefined => {
  if (!url.includes("/")) return undefined;

  const arr = url.split("/");
  const location = arr[arr.length - 1];

  return location.charAt(0).toUpperCase() + location.slice(1);
};
