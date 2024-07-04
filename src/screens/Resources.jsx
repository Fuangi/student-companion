import { useEffect, useState } from "react";
import axios from "axios";
import { DashLayout, Loader } from "../components/Layout";
import TechResource from "../components/resources/TechResource";
import Error from "../components/Layout/Error";

const apiKey = "5a3d3bda13294d7f9b0b9708b186aedd";

function Resources() {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setIsLoading(!isLoading);

    const getData = async () => {
      try {
        const res = await axios({
          method: "GET",
          // url: `https://newsapi.org/v2/top-headlines?category=${user.problem}&language=en&apiKey=${apiKey}`,
          url: `https://zenquotes.io/api/quotes`,
        });
        if (res.data.articles.length > 0) {
          setResources(res.data.articles);
        } else {
          setError(true);
        }
      } catch (err) {
        alert("An error occurred while fetching resources");
        console.log(err);
        setIsLoading(false);
        setError(true);
      }
    };
    // setIsLoading(false);

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashLayout>
      {error ? (
        <Error
          errCode="Sorry"
          errMsg={`Either there was a problem fetching resources or No resources found for your problem: ${user.problem}`}
        />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="resources">
          <div className="resources-tech">
            <h3>Tech Resources</h3>
            <div className="content">
              {resources?.map((resource, index) => (
                <TechResource key={index} article={resource} />
              ))}
            </div>
          </div>
        </div>
      )}
    </DashLayout>
  );
}

export default Resources;
