import React, { useState, useRef } from "react";
import { IoMdImage, IoIosSend } from "react-icons/io";
import { createMessage } from "../helpers/";

const MessageBox = ({ onPostMessage }) => {
  const [message, setMessage] = useState("");

  const fileInputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (message.length < 1) {
      return;
    }

    onPostMessage(createMessage(message, null, "OUTGOING"));
    setMessage("");
  };

  const onOpenFilePicker = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const onImageSubmit = (e) => {
    e.preventDefault();

    if (!e.target.files || !e.target.files[0]) {
      return;
    }

    let image = URL.createObjectURL(e.target.files[0]);
    onPostMessage(createMessage(null, image, "OUTGOING"));
  };

  return (
    <form
      className="flex-none flex items-center border-t border-gray-400 p-4"
      onSubmit={onSubmit}
    >
      <button
        className="bg-blue-900 rounded-full p-2 shadow"
        aria-label="Send an Image"
        onClick={onOpenFilePicker}
      >
        <IoMdImage className="text-white" />
      </button>
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        accept="image/*"
        onChange={onImageSubmit}
      />
      <textarea
        className="flex-auto mx-4 px-4 resize-none p-2 border border-gray-400 rounded h-10 focus:h-24"
        aria-label="Message"
        style={{ transition: "height .2s ease-in-out" }}
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type something..."
      />
      <button
        disabled={!message || message.length < 1}
        type="submit"
        className="bg-blue-900 text-white flex items-center font-bold uppercase rounded p-2 disabled:opacity-75 disabled:cursor-not-allowed"
      >
        <IoIosSend className="mr-2" /> Send
      </button>
    </form>
  );
};

export default MessageBox;
