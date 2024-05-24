import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

function DeleteAlert({ prevLoc, resId }) {
  // getting the id of the data to be deleted from the URL - passed as a query string
  const [searchParams] = useSearchParams();

  console.log("search params", searchParams);
  resId = searchParams.get("id");

  function deleteResource() {
    axios({
      method: "DELETE",
      url: `http://localhost:4000/api/v1/plans/${resId}`,
    })
      .then(function (response) {
        console.log("Deleted successfully");
        console.log(response);
      })
      .catch(function (error) {
        console.log("Error deleting the resource");
        console.log(error);
      });
  }

  const navigate = useNavigate();
  return (
    <div className="delete-alert">
      <h2>Are you sure you want to delete this?</h2>
      <button onClick={() => deleteResource()}>Delete</button>
      <button onClick={() => navigate("/plans")}>Cancel</button>
    </div>
  );
}

export default DeleteAlert;
