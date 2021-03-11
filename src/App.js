import NewMessageForm from "./components/NewMessageForm";
import MessageList from "./components/MessageList";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const _handleSend = (newMessage) => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <div className="App">
      <h1>This is the React TDD Practice</h1>
      <NewMessageForm onSend={_handleSend} />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
