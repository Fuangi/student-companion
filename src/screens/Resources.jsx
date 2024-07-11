import { useEffect, useState } from "react";
import axios from "axios";
import { DashLayout, Loader } from "../components/Layout";
import TechResource from "../components/resources/TechResource";
import Error from "../components/Layout/Error";

// const apiKey = "5a3d3bda13294d7f9b0b9708b186aedd";
const quotes = [
  {
    q: "Have a vision, trust yourself, break some rules, ignore the naysayers, don't be afraid to fail.",
    a: "Arnold Schwarzenegger",
    c: "95",
    h: "Have a vision, trust yourself, break some rules, ignore the naysayers, don't be afraid to fail. Arnold Schwarzenegger",
  },
  {
    q: "It is under the greatest adversity that there exists the greatest potential for doing good, both for oneself and others.",
    a: "Dalai Lama",
    c: "120",
    h: "It is under the greatest adversity that there exists the greatest potential for doing good, both for oneself and others. Dalai Lama",
  },
  {
    q: "Sometimes you put walls up not to keep people out, but to see who cares enough to break them down.",
    a: "Socrates",
    c: "98",
    h: "Sometimes you put walls up not to keep people out, but to see who cares enough to break them down. Socrates",
  },
  {
    q: "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
    a: "Henry Ward Beecher",
    c: "89",
    h: "Every artist dips his brush in his own soul, and paints his own nature into his pictures. Henry Ward Beecher",
  },
  {
    q: "Death is not sad; the sad thing is that most people don't really live at all.",
    a: "Dan Millman",
    c: "77",
    h: "Death is not sad; the sad thing is that most people don't really live at all. Dan Millman",
  },
  {
    q: "Fear is what stops you. Courage is what keeps you going.",
    a: "Unknown",
    c: "56",
    h: "Fear is what stops you. Courage is what keeps you going. Unknown",
  },

  {
    q: "One loses many laughs by not laughing at oneself.",
    a: "Mary Engelbreit",
    c: "49",
    h: "One loses many laughs by not laughing at oneself. Mary Engelbreit",
  },
  {
    q: "You need to be doing fewer things for more effect instead of doing more things with side effects.",
    a: "Gary Keller",
    c: "97",
    h: "You need to be doing fewer things for more effect instead of doing more things with side effects. Gary Keller",
  },
];

function Resources() {
  const [resources, setResources] = useState(quotes);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  /*   useEffect(() => {
    setIsLoading(!isLoading);

    const getData = async () => {
      try {
        const res = await axios({
          method: "GET",
          // url: `https://newsapi.org/v2/top-headlines?category=${user.problem}&language=en&apiKey=${apiKey}`,
          // url: `https://zenquotes.io/api/quotes`,
        });
        if (res.data.articles.length > 0) {
          setResources(res.data.articles);
        } else {
          setError(true);
        }
      } catch (err) {
        // alert("An error occurred while fetching resources");
        console.log(err);
        setIsLoading(false);
        setError(true);
      }
    };
    // setIsLoading(false);

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <DashLayout>
      {error ? (
        <Error
          errCode="Sorry"
          errMsg={`Either there was a problem fetching resources`}
        />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="resources">
          {resources?.map((resource, index) => (
            <TechResource key={index} article={resource} />
          ))}
        </div>
      )}
    </DashLayout>
  );
}

export default Resources;
