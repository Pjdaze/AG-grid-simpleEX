export const fetchData = async () => {
  const url = "https://api.github.com/users?since=2000";
  const res = await fetch(url);
  const data = await res.json();

  return JSON.stringify(data);
};
