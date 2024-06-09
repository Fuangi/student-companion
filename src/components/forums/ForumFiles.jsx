import {
  FaFile,
  FaFileZipper,
  FaFolder,
  FaLink,
  FaPhotoFilm,
  FaVideo,
} from "react-icons/fa6";
import Files from "./Files";
import FileTypes from "./FileType";

function ForumFiles() {
  return (
    <div className="group-details">
      <div className="group-header">Shared Files</div>
      <div className="group-info">
        <img src="" alt="Name" />
        <h3>Group Name</h3>
        <p>Members</p>
      </div>
      <div className="group-files">
        <div className="files">
          <Files
            icon={<FaFolder className="file-icon" />}
            name="All Files"
            allClass="all-files"
            number="100"
          />
          <Files
            icon={<FaLink className="file-icon" />}
            name="All Links"
            number="30"
            allClass="links"
          />
        </div>
        <div className="file-types">
          <h4>File Types</h4>
          <FileTypes
            icon={<FaFile className="type-icon" />}
            fileType="Documents"
            fileSize="1800, 380MB"
            docType="documents"
          />
          <FileTypes
            icon={<FaPhotoFilm className="type-icon" />}
            fileType="Photos"
            fileSize="1800, 380MB"
            docType="pictures"
          />
          <FileTypes
            icon={<FaVideo className="type-icon" />}
            fileType="Videos"
            fileSize="1800, 380MB"
            docType="videos"
          />
          <FileTypes
            icon={<FaFileZipper className="type-icon" />}
            fileType="Others"
            fileSize="1800, 380MB"
            docType="others"
          />
        </div>
      </div>
    </div>
  );
}

export default ForumFiles;
