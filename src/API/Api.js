import axios from "axios";

export let addUser = async (user, endPoint) => {
  let { data } = await axios.post(
    `https://route-movies-api.vercel.app/${endPoint}`,
    user
  );
  return data;
};
