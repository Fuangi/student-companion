import axios from "axios";
const token = localStorage.getItem("token");

export const getAllGoals = async () => {
  const res = await axios({
    method: "GET",
    url: "http://localhost:4000/api/v1/goals",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.status !== 200) throw Error("Failed to load all your goals");

  const { data } = res.data.data;

  return data;
};

export const getGoal = async (id) => {
  const res = await axios({
    method: "GET",
    url: `http://localhost:4000/api/v1/goals/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 200) throw Error("Failed to load Plan");

  const { data } = res.data.data;

  return data;
};

export const deleteGoal = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `http://localhost:4000/api/v1/goals/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 200) throw Error("Failed to delete Plan");
};

export const updateGoal = async (id, body) => {
  const res = await axios({
    method: "PATCH",
    url: `http://localhost:4000/api/v1/plans/${id}`,
    data: { body },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 200) throw Error("Failed to load Plan");

  const { data } = res.data.data;

  return data;
};
