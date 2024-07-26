import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Error from "./Error";

function DeleteAlert({ prevLoc, resId, res }) {
  // getting the id of the data to be deleted from the URL - passed as a query string
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState();

  resId = searchParams.get("id");

  function deleteResource() {
    const token = localStorage.getItem("token");

    axios({
      method: "DELETE",
      // url: `http://localhost:4000/api/v1/${res}/${resId}`,
      url: `https://companion-backend.onrender.com/api/v1/${res}/${resId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        console.log("Deleted successfully");
        if (response.status === 204) {
          alert("Deleted successfully");
          setTimeout((navigate(prevLoc), 5));
        }
      })
      .catch(function (error) {
        console.log("Error deleting the resource");
        console.log(error);
        setError(true);
        setErrMsg(error.request);
      });
  }

  const navigate = useNavigate();
  return (
    <>
      {!error ? (
        <div className="delete-alert">
          <h2>Are you sure you want to delete this from your {res}?</h2>
          <button onClick={() => deleteResource()}>Delete</button>
          <button onClick={() => navigate("/plans")}>Cancel</button>
        </div>
      ) : (
        <Error errCode={errMsg.status} errMsg={errMsg.statusText} />
      )}
    </>
  );
}

export default DeleteAlert;
