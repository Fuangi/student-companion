import { useEffect, useState } from "react";
import { DashLayout, Loader } from "../components/Layout";
import TechResource from "../components/TechResource";

const apiKey = "5a3d3bda13294d7f9b0b9708b186aedd";

function Resources() {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    var url = `https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=${apiKey}`;

    var req = new Request(url);

    setIsLoading(!isLoading);

    fetch(req)
      .then((res) => res.json())
      .then((data) => {
        setResources(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashLayout>
      <div className="resources">
        {isLoading ? (
          <Loader />
        ) : (
          resources.map((resource, index) => (
            <TechResource key={index} article={resource} />
          ))
        )}
        <div>Hello World, my resources</div>
      </div>
    </DashLayout>
  );
}

export default Resources;
