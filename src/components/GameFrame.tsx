import React, { useEffect, useState } from "react";
import Header from "./Header";

const GameFrame = () => {
  const [currentColor, setCurrentColor] = useState<string>("");

  useEffect(() => {
    setBackgroundColor();
  }, []);

  const setBackgroundColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setCurrentColor(randomColor);
  };

  return (
    <div
      style={{ backgroundColor: `#${currentColor}` }}
      className="h-screen flex"
    >
      <div className="text-center m-auto">
        <Header>Current color: {currentColor}</Header>
        <button
          className="mt-5 font-bold py-2 px-4 rounded-full border-2 bg-transparent"
          onClick={setBackgroundColor}
        >
          Set new color
        </button>
      </div>
    </div>
  );
};

export default GameFrame;
