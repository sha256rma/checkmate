import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "../axios";
import ChatUI from "./chat.component";

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/message/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("413bad93b84bc142e781", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      console.log(data);
      setMessages([...messages, data]);
    });

    //only have one subscriber - constantly adding new listener
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return <ChatUI messages={messages} />;
}

export default Chat;
