import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ForumFiles from "./ForumFiles";
import { MdSend } from "react-icons/md";

function Conversation() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const [searchParams] = useSearchParams();

  // Referemce for auto scroll
  const msgEndRef = useRef(null);

  // State from the slice
  const { socket } = useSelector((store) => store.message);

  const groupId = searchParams.get("id");
  const user = JSON.parse(localStorage.getItem("user"));
  // const userId = user._id;

  useEffect(function () {
    if (socket === null) return;
    socket.on("userJoined", (userId) => {
      const message = { message: ` ${userId} joined this chat` };
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

  const scrollToBottom = () => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

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
            messageList.map((msgData, i) => (
              <div
                key={i}
                className="message"
                id={
                  msgData.author
                    ? user.name === msgData.author
                      ? "you"
                      : "others"
                    : "joined"
                }
              >
                <div className="message-content">
                  <p>{msgData.message}</p>
                </div>
                <div className="message-meta">
                  <p>{msgData.author}</p>
                  <p>{msgData.time}</p>
                </div>
                <p ref={msgEndRef} style={{ display: "none" }}></p>
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
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button onClick={handleSendMessage}>
            <MdSend />
          </button>
        </div>
      </div>
      <ForumFiles />
    </div>
  );
}

export default Conversation;
