import { useEffect, useState } from "react";
import axios from "axios";
import { DashLayout, Loader } from "../components/Layout";
import TechResource from "../components/resources/TechResource";
import Error from "../components/Layout/Error";

const apiKey = "5a3d3bda13294d7f9b0b9708b186aedd";

function Resources() {
  const [techResources, setTechResources] = useState([]);
  const [healthResources, setHealthResources] = useState([]);
  const [bizResources, setBizResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setIsLoading(!isLoading);

    const getData = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `https://newsapi.org/v2/top-headlines?category=${user.problem}&language=en&apiKey=${apiKey}`,
        });
        console.log(res);
      } catch (err) {
        alert("An error occurred while fetching resources");
        console.log(err);
      }
    };

    /*   .then(([techRes, healthRes, bizRes]) => {
        setTechResources(techRes.articles);
        setHealthResources(healthRes.articles);
        setBizResources(bizRes.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(true);
      }); */
    // setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashLayout>
      {error ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="resources">
          <div className="resources-tech">
            <h3>Tech Resources</h3>
            <div className="content">
              {techResources?.map((resource, index) => (
                <TechResource key={index} article={resource} />
              ))}
            </div>
          </div>
          <div className="resources-health">
            <h3>Health Resources</h3>
            <div className="content">
              {healthResources?.map((resource, index) => (
                <TechResource key={index} article={resource} />
              ))}
            </div>
          </div>
          <div className="resources-health">
            <h3>Business Resources</h3>
            <div className="content">
              {bizResources?.map((resource, index) => (
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
