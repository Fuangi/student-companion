const sentMsg = [
  "Hello",
  "Hi",
  "Hello",
  "Hi",
  "Hello",
  "Hi",
  "Hello",
  "Hi",
  "Hello",
  "Hi",
  "Hello",
  "Hi",
  "Hello",
  "Hi",
  "Hello",
  "Hi",
  "Hello",
  "Hi",
  "Hello",
  "Hi",
];

function Conversation() {
  return (
    <div className="forum-conversation">
      {sentMsg.map((msg, i) => {
        if (i % 2 === 0) {
          return (
            <div className="received-msg" key={i}>
              {msg}
            </div>
          );
        } else {
          return (
            <div className="sent-msg" key={i}>
              {msg}
            </div>
          );
        }
      })}

      <div className="message-input">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Enter message..."
        />
        <button> 🙂</button>
        <button>Files</button>
        <button> Send</button>
      </div>
    </div>
  );
}

export default Conversation;
