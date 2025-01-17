// Created this for dev purposes only, to check the grid consistency during the development
"use client";

import { useState } from "react";
import { Button } from "../ui/button";

function GridDevTool() {
  const [gridIsShown, setGridIsShown] = useState(false);

  const toggleShowGrid = () => {
    setGridIsShown((prevState) => !prevState);
  };

  return (
    <>
      <Button
        className="fixed right-2 top-2 z-20 hidden h-8 bg-project-orange px-2 hover:bg-project-orange md:block"
        onClick={toggleShowGrid}
      >
        Grid
      </Button>
      {gridIsShown && (
        <div
          className="pointer-events-none fixed top-0 z-30 grid w-screen grid-cols-12 px-[120px]"
          style={{ gap: "min(2%, 30px)" }}
        >
          <div className="h-screen bg-pink-200 opacity-20"></div>
          <div className="h-screen bg-pink-200 opacity-20"></div>
          <div className="h-screen bg-pink-200 opacity-20"></div>
          <div className="h-screen bg-pink-200 opacity-20"></div>
          <div className="h-screen bg-pink-200 opacity-20"></div>
          <div className="h-screen bg-pink-200 opacity-20"></div>
          <div className="h-screen bg-pink-200 opacity-20"></div>
          <div className="h-screen bg-pink-200 opacity-20"></div>
          <div className="h-screen bg-pink-200 opacity-20"></div>
          <div className="h-screen bg-pink-200 opacity-20"></div>
          <div className="h-screen bg-pink-200 opacity-20"></div>
          <div className="h-screen bg-pink-200 opacity-20"></div>
        </div>
      )}
    </>
  );
}

export default GridDevTool;
