import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessageRef }: any) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const sendButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user?.getUsername(),
        ethAddress: user?.get("ethAddress"),
      })
      .then(
        () => {
          endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
        },
        (error: any) => console.log(error.message)
      );
    setMessage("");
  };
  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl border-4 border-blue-400 z-50 rounded-full">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        className="outline-none pr-5 bg-transparent text-white flex-grow placeholder-gray-400"
        placeholder={`Enter a Message ${user?.getUsername()}...`}
      />
      <button
        className="font-bold text-pink-500"
        type="submit"
        onClick={sendButton}
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
