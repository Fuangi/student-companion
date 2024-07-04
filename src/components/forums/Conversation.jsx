import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ForumFiles from "./ForumFiles";

function Conversation() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [typing, setTyping] = useState(false);

  const [searchParams] = useSearchParams();

  // Referemce for auto scroll
  const msgRef = useRef(null);

  // State from the slice
  const { socket } = useSelector((store) => store.message);

  const groupId = searchParams.get("id");
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user._id;

  useEffect(function () {
    if (socket === null) return;
    socket.on("userJoined", (userId) => {
      const message = { message: `User ${userId} joined` };
      setMessageList((prevMsgs) => [...prevMsgs, message]);
    });

    return () => socket.off("userJoined", () => console.log("Byeee Guiyzzz"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    function () {
      if (socket === null) return;

      socket.on("receiveMessage", (message) => {
        setMessageList((prevMessages) => [...prevMessages, message]);
      });

      return () =>
        socket.off("receiveMessage", () => console.log("Message received"));
    },
    [socket]
  );

  // Message handlers
  async function handleSendMessage() {
    // e.preventDefault();

    if (message === "") return;

    const msgData = {
      group: groupId,
      author: user.name,
      message,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };
    await socket.emit("sendMessage", msgData);
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

        <div className="message-list" ref={msgRef}>
          {messageList.length > 0 ? (
            messageList.map((msgData, i) => (
              <div
                key={i}
                className="message"
                id={user.name === msgData.author ? "you" : "others"}
              >
                <div className="message-content">
                  <p>{msgData.message}</p>
                </div>
                <div className="message-meta">
                  <p>{msgData.author}</p>
                  <p>{msgData.time}</p>
                </div>
              </div>
            ))
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
            onKeyPress={handleTyping}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <ForumFiles />
    </div>
  );
}

export default Conversation;
