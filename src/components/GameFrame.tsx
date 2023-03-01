import React, { useEffect, useState } from "react";
import Header from "./Header";
type ComponentColors = "#fafafa" | "#171717";

const GameFrame = () => {
  const transitionDuration = 700;
  const [currentColor, setCurrentColor] = useState<string>("");
  const [componentColorValue, setComponentColorValue] =
    useState<ComponentColors>("#171717");

  useEffect(() => {
    setCurrentColorValue();
  }, []);

  const setCurrentColorValue = () => {
    let randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase();
    if (randomColor.length < 6) {
      for (let i = randomColor.length; i < 6; i++) randomColor += "0";
    }
    isDarkColor(randomColor);
    setCurrentColor(randomColor);
  };

  const isDarkColor = (color: string) => {
    color = color.substring(1); // strip #
    const rgb = parseInt(color, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >> 8) & 0xff; // extract green
    const b = (rgb >> 0) & 0xff; // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    luma < 40
      ? setComponentColorValue("#fafafa")
      : setComponentColorValue("#171717");
  };

  return (
    <div
      style={{ backgroundColor: `#${currentColor}` }}
      className={`h-screen flex ease-in-out duration-${transitionDuration}`}
    >
      <div className={`text-center m-auto text-neutral-${componentColorValue}`}>
        <h1
          style={{
            color: componentColorValue,
            transitionDuration: `${transitionDuration}ms`,
          }}
          className="text-4xl font-extrabold"
        >
          Current color: #{currentColor}
        </h1>
        <button
          style={{
            color: componentColorValue,
            borderColor: componentColorValue,
            transitionDuration: `${transitionDuration}ms`,
          }}
          className={`mt-5 font-bold py-2 px-4 rounded-full border-2 bg-transparent ring-0 shadow-xl hover:shadow-none hover:scale-95`}
          onClick={setCurrentColorValue}
        >
          Set new color
        </button>
      </div>
    </div>
  );
};

export default GameFrame;
