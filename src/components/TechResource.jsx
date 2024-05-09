import { Link } from "react-router-dom";

function TechResource({ article }) {
  return (
    <div className="tech-resource">
      <img
        src={article.urlToImage}
        alt={article.title}
        style={{ height: "25rem", width: "100%" }}
      />
      <h3>{article.title}</h3>
      <h5>{article.description}</h5>
      <p>{article.content}</p>
      <Link to={article.url}>Read More</Link>
    </div>
  );
}

export default TechResource;
