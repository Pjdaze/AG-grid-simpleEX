import Axios from "axios";
export const fetchSapData = () => {
  const url = "https://sapvalues-api.herokuapp.com/sap-values";

  return Axios.get(url)
    .then(({ data }) => {
      //console.log(data);
      return data;
    })
    .catch((err) => {
      console.log("error: ", err);
    });
};

export const fecthUsers = () => {
  const randomUserURL = "https://api.covidtracking.com/v1/us/daily.json";

  return Axios.get(randomUserURL)
    .then(({ data }) => {
      ///console.log(data);
      return data;
    })
    .catch((err) => {
      //console.log("error:", err);
    });
};
export const fetchGHData = () => {
  const GH_URL = "http://www.omdbapi.com/?s=Friday_the_13th&apikey=b43154e3";

  return Axios.get(GH_URL)
    .then(({ data }) => {
      console.log("Movies : ", data.Search);
      return [...data.Search];
    })
    .catch((err) => {
      console.log("error:", err);
    });
};

export const entries = [
  { name: "John", email: "john_doe@yahoo", password: "helloworld" },
  { name: "Jo", email: "jo.msn.com", password: "pa$$W0rd" },
  { name: "Iliana", email: "marry123@test.com", password: "123WX&abcd" },
  {
    name: "kent".repeat(10),
    email: "kent@testing.com",
    password: "w%oRD123yes",
  },
  { name: "Robert", email: "robert_bell@example.com", password: "r&bsEc234E" },
];
