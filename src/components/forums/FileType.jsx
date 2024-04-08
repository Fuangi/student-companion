import { FaGreaterThan } from "react-icons/fa6";

function FileTypes({ icon, fileType, fileSize }) {
  return (
    <div className="file-type">
      <p>{icon}</p>
      <div className="type-info">
        <h3>{fileType}</h3>
        <h5>{fileSize}</h5>
      </div>
      <p>
        <FaGreaterThan />
      </p>
    </div>
  );
}

export default FileTypes;
