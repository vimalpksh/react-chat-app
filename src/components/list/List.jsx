import React from "react";
import "./list.css";
import ChatList from "./chatList/chatList.jsx";
import UserInfo from "./userInfo/userInfo.jsx";

const list = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default list;
