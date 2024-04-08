import Conversation from "./Conversation";
import FileTypes from "./FileType";
import Files from "./Files";
import ForumList from "./ForumList";
import {
  FaFile,
  FaFileZipper,
  FaFolder,
  FaLink,
  FaPhotoFilm,
  FaVideo,
} from "react-icons/fa6";

function Forum() {
  return (
    <div className="forum-container">
      <div className="forum-list">
        <div className="list-header">My Chats</div>
        <div className="user-details">
          <img src="" alt="Name" />
          <h3>Username</h3>
          <p>status</p>
        </div>
        <div className="features">
          <input
            type="search"
            name="search"
            className="search"
            id="search"
            placeholder="Search..."
          />
          <div className="new-chat">
            <p>Your chats</p>

            <button>+</button>
          </div>
        </div>
        <ForumList />
        <ForumList />
      </div>
      <div className="conversations">
        {/* do this so when in a personal convo, participants should not show */}
        <div className="message-tab">
          <h2>Group chat</h2>
          <div className="tab">
            <p>Members</p>
            <p>Participants</p>
          </div>
        </div>
        <Conversation />
        <div className="message-input"></div>
      </div>
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
              number="100"
            />
            <Files
              icon={<FaLink className="file-icon" />}
              name="All Links"
              number="30"
            />
          </div>
          <div className="file-types">
            <h3>File Types</h3>
            <FileTypes
              icon={<FaFile className="type-icon" />}
              fileType="Documents"
              fileSize="1800, 380MB"
            />
            <FileTypes
              icon={<FaPhotoFilm className="type-icon" />}
              fileType="Photos"
              fileSize="1800, 380MB"
            />
            <FileTypes
              icon={<FaVideo className="type-icon" />}
              fileType="Videos"
              fileSize="1800, 380MB"
            />
            <FileTypes
              icon={<FaFileZipper className="type-icon" />}
              fileType="Others"
              fileSize="1800, 380MB"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
