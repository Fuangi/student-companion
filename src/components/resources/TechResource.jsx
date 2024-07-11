import { Link } from "react-router-dom";

function TechResource({ article }) {
  return (
    <div className="tech-resource">
      <img
        src={article.urlToImage}
        alt={article.title}
        style={{ width: "100%" }}
      />
      <h3>{article.q}</h3>
      <h5>{article.a}</h5>
      <p>{article.h}</p>
      {/* <Link to={article.url}>Read More</Link> */}
    </div>
  );
}

export default TechResource;
