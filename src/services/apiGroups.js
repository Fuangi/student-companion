import axios from "axios";

const token = localStorage.getItem("token");

export const getAllGroups = async () => {
  const res = await axios({
    method: "GET",
    url: "http://localhost:4000/api/v1/groups",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.status !== 200) throw Error("Failed to load all groups");

  const { data } = res.data.data;

  return data;
};

export const getGroup = async (id) => {
  const res = await axios({
    method: "GET",
    url: `http://localhost:4000/api/v1/groups/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 200) throw Error("Failed to load Group");

  const { data } = res.data.data;

  return data;
};

export const deletePlan = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `http://localhost:4000/api/v1/groups/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 200) throw Error("Failed to delete group");
};

export const updatePlan = async (id, body) => {
  const res = await axios({
    method: "PATCH",
    url: `http://localhost:4000/api/v1/groups/${id}`,
    data: { body },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status !== 200) throw Error("Failed to load group");

  const { data } = res.data.data;

  return data;
};
