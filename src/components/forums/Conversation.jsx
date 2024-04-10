import { useState } from "react";
import { MdEmojiEmotions, MdFileUpload, MdSend } from "react-icons/md";

const sentMsg = ["Hello", "Hi", "Hello", "Hi", "Hello", "Hi", "Hello", "Hi"];

function Conversation() {
  // states
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState("");

  function handleSendMessage(e) {
    e.preventDefault();
    setIsTyping(false);
    sentMsg.push(message);
  }

  return (
    <div className="forum-conversation">
      {sentMsg.map((msg, i) => {
        if (i % 2 === 0) {
          return (
            <div className="received-msg" key={i}>
              <img src="" alt="sender" />
              <p>{msg}</p>
            </div>
          );
        } else {
          return (
            <div className="sent-msg" key={i}>
              <p>{msg}</p>
            </div>
          );
        }
      })}
      <form action="">
        <div className="message-input">
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => {
              setIsTyping(true);
              setMessage(e.target.value);
            }}
            id="message"
            placeholder="Enter message..."
          />
          <button>
            <MdEmojiEmotions />
          </button>
          <button>
            {/*  <input
              type="file"
              name="file"
              id="file"
              placeholder={<FaFilePowerpoint />}
            /> */}
            <MdFileUpload />
          </button>
          <button onClick={handleSendMessage}>
            <MdSend />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Conversation;
