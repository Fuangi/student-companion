import axios from "axios";

export const getAllPlans = async () => {
  const res = await axios({
    method: "GET",
    url: "http://localhost:4000/api/v1/plans",
  });
  if (res.status !== 200) throw Error("Failed to load all your plans");

  const { data } = res.data.data;

  return data;
};
