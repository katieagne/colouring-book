import React, { useState } from "react";
import "./dashboard.scss";
import { saveSvgAsPng } from "save-svg-as-png";
import Cactus from "../../components/Cactus";
import Palette from "../../components/Palette/Palette";

export default function Dashboard() {
  // create an array with same number of elements as paths in the svg
  const [fillColour, setFillColour] = useState(Array(9).fill("white"));

  // update choice of colour to fill with
  const [currentColour, setCurrentColour] = useState("white");

  // function to apply fill colour
  const newFillColour = (i) => {
    let newColour = fillColour.slice(0);
    newColour[i] = currentColour;
    setFillColour(newColour);
  };

  // function to reset
  const resetFill = () => {
    setFillColour(Array(9).fill("white"));
  };

  // function to download svg
  const onDownload = () => {
    saveSvgAsPng(document.getElementById("cactus"), "cute-cactus.png");
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">✨ colour a cactus ✨</h1>
      <div className="dashboard__container">
        <Cactus fillColour={fillColour} newFill={newFillColour} />
        <Palette
          currentColour={currentColour}
          changeColour={setCurrentColour}
        />
        <button className="dashboard__btn" onClick={resetFill}>
          reset
        </button>
        <div className="dashboard__utils">
          <button className="dashboard__save-btn" onClick={onDownload}>
            save cactus
          </button>
        </div>
      </div>
    </div>
  );
}
