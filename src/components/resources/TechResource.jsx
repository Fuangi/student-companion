import { Link } from "react-router-dom";

function TechResource({ article }) {
  return (
    <div className="tech-resource">
      <img
        src={article.urlToImage}
        alt={article.title}
        style={{ width: "100%" }}
      />
      <h3>{article.title}</h3>
      <h5>{article.description?.slice(0, 50)}</h5>
      <p>{article.content?.slice(0, 100)}...</p>
      <Link to={article.url}>Read More</Link>
    </div>
  );
}

export default TechResource;
