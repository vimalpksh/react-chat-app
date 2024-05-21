import React from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Alan Joy</span>
            <p>My description is empty.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              This is a random texts that I have typed for the message instead
              of using lorem ipsum, which does not make it look applealing.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              This is a random texts that I have typed for the message instead
              of using lorem ipsum, which does not make it look applealing.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              This is a random texts that I have typed for the message instead
              of using lorem ipsum, which does not make it look applealing.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              This is a random texts that I have typed for the message instead
              of using lorem ipsum, which does not make it look applealing.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              This is a random texts that I have typed for the message instead
              of using lorem ipsum, which does not make it look applealing.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.unsplash.com/photo-1715959168101-6001fd95ea3d?q=80&w=1507&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              This is a random texts that I have typed for the message instead
              of using lorem ipsum, which does not make it look applealing.
            </p>
            <span>1min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          name=""
          id=""
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
