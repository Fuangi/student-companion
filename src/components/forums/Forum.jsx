import DashboardNav from "../nav/DashboardNav";
import Conversation from "./Conversation";
import ForumList from "./ForumList";

function Forum() {
  return (
    <div className="forum-container">
      <div>
        <DashboardNav />
      </div>
      <div className="forum-list">
        <p>Here are all your forums...</p>
        <ForumList />
        <ForumList />
        <ForumList />
        <ForumList />
        <ForumList />
        <ForumList />
        <ForumList />
      </div>
      <div className="conversations">
        <ForumList />
        {/* <p>Hello, Your converesations will appear here...</p> */}
        <Conversation />
      </div>
      <div className="message-input"></div>
    </div>
  );
}

export default Forum;
