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

export const getPlan = async (id) => {
  const res = await axios({
    method: "GET",
    url: `http://localhost:4000/api/v1/plans/${id}`,
  });

  if (res.status !== 200) throw Error("Failed to load Plan");

  const { data } = res.data.data;

  return data;
};

export const deletePlan = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `http://localhost:4000/api/v1/plans/${id}`,
  });

  if (res.status !== 200) throw Error("Failed to delete Plan");
};

export const updatePlan = async (id, body) => {
  const res = await axios({
    method: "PATCH",
    url: `http://localhost:4000/api/v1/plans/${id}`,
    data: {},
  });

  if (res.status !== 200) throw Error("Failed to load Plan");

  const { data } = res.data.data;

  return data;
};
