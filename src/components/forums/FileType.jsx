import { FaGreaterThan } from "react-icons/fa6";

function FileTypes({ icon, fileType, fileSize, docType }) {
  return (
    <div className="file-type">
      <p className={docType}>{icon}</p>
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
