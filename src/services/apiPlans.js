import axios from "axios";

// const webURL = "https://companion-backend.onrender.com";

const token = localStorage.getItem("token");

export const getAllPlans = async () => {
  const res = await axios({
    method: "GET",
    url: "http://localhost:4000/api/v1/plans",
    // url: `${webURL}/api/v1/plans`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.status !== 200) throw Error("Failed to load all your plans");

  const { data } = res.data.data;

  return data;
};

export const getPlan = async (id) => {
  const res = await axios({
    method: "GET",
    // url: `${webURL}/api/v1/plans/${id}`,
    url: `http://localhost:4000/api/v1/plans/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 200) throw Error("Failed to load Plan");

  const { data } = res.data.data;

  return data;
};

export const deletePlan = async (id) => {
  const res = await axios({
    method: "DELETE",
    // url: `${webURL}/api/v1/plans${id}`,
    url: `http://localhost:4000/api/v1/plans/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 200) throw Error("Failed to delete Plan");
};

export const updatePlan = async (id, body) => {
  const res = await axios({
    method: "PATCH",
    // url: `${webURL}/api/v1/plans/${id}`,
    url: `http://localhost:4000/api/v1/plans/${id}`,
    data: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 200) throw Error("Failed to load Plan");

  const { data } = res.data.data;

  return data;
};
