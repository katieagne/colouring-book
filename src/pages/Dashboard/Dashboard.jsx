import React, { useState } from "react";
import "./dashboard.scss";
import { saveSvgAsPng } from "save-svg-as-png";
import { Download, Question } from "akar-icons";
import ReactTooltip from "react-tooltip";
import Cactus from "../../components/Cactus";
import Palette from "../../components/Palette/Palette";
// import Footer from "../../components/Footer/Footer";

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
          <Question
            className="dashboard__util-btn"
            strokeWidth={2.5}
            size={24}
            data-tip
            data-for="question"
          />
          <ReactTooltip
            id="question"
            className="dashboard__tip-container"
            place="top"
            type="light"
          >
            <p className="dashboard__tip--bold">how to colour</p>
            <p className="dashboard__tip">
              click the paint swatch you want to use
            </p>
            <p className="dashboard__tip">
              after a swatch is selected, click the area on the cactus you'd
              like to apply the colour
            </p>
          </ReactTooltip>
          <Download
            className="dashboard__util-btn"
            onClick={onDownload}
            strokeWidth={2.5}
            size={24}
            data-tip
            data-for="download"
          />
          <ReactTooltip
            id="download"
            className="dashboard__tip-container"
            place="top"
            type="light"
          >
            <p className="dashboard__tip--bold">download your 🌵 </p>
          </ReactTooltip>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
