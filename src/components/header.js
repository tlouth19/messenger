import React from "react";
import { IoMdCall } from "react-icons/io";

const Header = () => {
  return (
    <header className="border-b flex items-center justify-between flex-none px-6 py-2">
      <div className="flex items-center">
        <div className="rounded-full overflow-hidden w-8 h-8 mr-2 border-2 border-green-800 ">
          <img
            src="https://i.pravatar.cc/300"
            className="w-full h-full"
            alt="FieldChat Fake Avatar Image :)"
          />
        </div>
        <div>
          <h1 className="font-bold">FieldChat</h1>
          <span className="text-xs text-gray-600 block -mt-1">
            I tell jokes, chat with people, and make stuff.
          </span>
        </div>
      </div>
      <div>
        <a href="tel:1-800-123-1234" title="Call FieldChat">
          <IoMdCall className="text-blue-800 text-xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;
