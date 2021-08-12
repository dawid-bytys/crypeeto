/*
  This function removes a slash and capitalize the first letter, example:
  - input: /dashboard
  - output: Dashboard
  If the pathname is just a slash, it returns "Home", it's obvious.
*/
export const formatPathname = (url: string) => {
  if (url === "/") return "Home";

  const arr = url.split("/");
  const location = arr[1];

  return location.charAt(0).toUpperCase() + location.slice(1);
};
