import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ForumFiles from "./ForumFiles";

function Conversation() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [typing, setTyping] = useState(false);

  const [searchParams] = useSearchParams();

  // State from the slice
  const { socket } = useSelector((store) => store.message);

  const groupId = searchParams.get("id");
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user._id;

  useEffect(function () {
    if (socket === null) return;
    socket.emit("joinRoom", { groupId, userId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    function () {
      if (socket === null) return;

      socket.on("receiveMessage", (message) => {
        setMessageList((prevMessages) => [...prevMessages, message]);
      });

      socket.on("typing", (userId) => {
        console.log(`${userId} is typing...`);
      });

      socket.on("stopTyping", (userId) => {
        console.log(`${userId} stopped typing.`);
      });

      return () => {
        socket.emit("leaveRoom", { groupId, userId });
      };
    },
    [socket, userId, groupId]
  );

  // Message handlers
  async function handleSendMessage(e) {
    e.preventDefault();

    if (message.trim() === "") return;

    socket.emit("sendMessage", { groupId, message, userId });
    setMessage("");
  }

  const handleTyping = () => {
    if (!typing) {
      setTyping(true);
      socket.emit("typing", { groupId, userId });
    }

    setTimeout(() => {
      setTyping(false);
      socket.emit("stopTyping", { groupId, userId });
    }, 1000);
  };

  return (
    <div className="forum-conversation">
      <div className="header-messages">
        <div className="message-tab">
          <h2>Group chat</h2>
          <div className="tab">
            <p>Members</p>
            <p>Participants</p>
          </div>
        </div>
        <div className="message-list">
          {messageList.length > 0 ? (
            messageList.map((msg, i) => <div key={i}>{msg.message}</div>)
          ) : (
            <h3 className="no-msg">
              No Messages yet. Send a message for it to appear here!
            </h3>
          )}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={handleTyping}
            onKeyDown={handleTyping}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <ForumFiles />
    </div>
  );
}

export default Conversation;
