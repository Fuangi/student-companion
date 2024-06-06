import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// To setup connection to the socket.io that is in our backend
const socket = io.connect("http://localhost:4000"); //connect to use it to emit or listen to events

function Conversation() {
  // states
  const [message, setMessage] = useState("");
  const [msgRcvd, setMsgRcvd] = useState([]);

  /*  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  }; */

  // Emit message to those listening on the server - send message to others
  // We cannot emit to another client directly, so we emit to the backend and when it receives the event, another is emiitted to the frontend - a connector btn the events
  function handleSendMessage(e) {
    e.preventDefault();
    socket.emit("send_message", { message });
    //sending to the backend
  }

  // Listening to messages from the server in response to sent messages (whenever any event is thrown to use from the backend)
  useEffect(() => {
    socket.on("receive_message", (data) => {
      // setMsgRcvd(data.message);
      console.log(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <div className="forum-conversation">
      <div className="message-list"></div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Conversation;
