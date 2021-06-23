import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import "../css/messenger.scss";
const Messenger = () => {
  const [chatBot, setChatBot] = useState(false);
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const chatStyle = useSpring({
    opacity: 1,
    right: 210,
    from: { opacity: 0, right: -0 },
  });
  const chatStyle2 = useSpring({
    opacity: 0,
    from: { opacity: 1 },
    config: { delay: 10000 },
  });
  const handleMessage = () => {
    const arr = [...message, input];
    setMessage(arr);
    setInput("");
  };

  return (
    <div>
      {!chatBot && (
        <animated.div
          className="chat__Box"
          style={chatStyle}
          onClick={() => setChatBot(!chatBot)}
        >
          <div>
            <Button>
              <ChatBubbleIcon></ChatBubbleIcon>
            </Button>
          </div>
        </animated.div>
      )}
      {chatBot && (
        <>
          <div
            className="messenger"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <div className="messenger__top">
              <div>
                <Avatar src="https://image.shutterstock.com/image-photo/folded-hands-business-portrait-smiling-260nw-230293954.jpg"></Avatar>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <div>
                    <div></div>
                    <p>En Linea</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => setChatBot(!chatBot)}>
                <CloseIcon></CloseIcon>
              </Button>
            </div>
            <div className="messenger__body">
              <span className="message__ai">lorem ipsum lorem ipsum</span>
              {message.map((x) => (
                <span className="message__user">{x}</span>
              ))}
              <p></p>
            </div>
            <div className="messenger__input">
              <div>
                <input
                  value={input}
                  type="text"
                  placeholder="Escribe tu mensaje"
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button onClick={handleMessage}>
                  <SendIcon></SendIcon>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Messenger;
