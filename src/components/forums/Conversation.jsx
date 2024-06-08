import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Conversation({ userId, groupId }) {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [typing, setTyping] = useState(false);

  // State from the slice
  const { socket } = useSelector((store) => store.message);

  useEffect(
    function () {
      if (socket === null) return;

      socket.emit("joinRoom", { groupId, userId });

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

    socket.emit("sendMessage", { groupId, message });
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
      <div className="message-list">
        {messageList.length > 0 ? (
          messageList.map((msg, i) => <div key={i}>{msg.message}</div>)
        ) : (
          <p>No Messages yet. Send a message for it to appear here!</p>
        )}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleTyping}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Conversation;
