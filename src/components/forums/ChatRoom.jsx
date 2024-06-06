import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// To setup connection to the socket.io that is in our backend
const socket = io.connect("http://localhost:4000"); //connect to use it to emit or listen to events

function ChatRoom() {
  // Befor Login
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  // After login
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([
    { author: "Van", message: "Hiya" },
  ]);

  const connecToRoom = () => {
    socket.emit("join_room", room);
    setLoggedIn(true);
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room, author: name });
    setMessageList(...messageList, { message, name });
    setMessage("");
  };

  return (
    <div>
      {!loggedIn ? (
        <div className="login">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={connecToRoom}>Enter Chat</button>
        </div>
      ) : (
        <div>
          <div>
            {messageList?.map((msg, i) => {
              return (
                <h1 key={i}>
                  {msg.author}, {msg.message}
                </h1>
              );
            })}
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onClick={sendMessage}
            />
            <button>send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatRoom;
