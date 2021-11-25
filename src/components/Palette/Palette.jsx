import React from "react";
import "./palette.scss";

export default function Palette(props) {
  const colours = [
    "#E1657D",
    "#f3722c",

    "#CCD5AE",
    "#99B77B",
    "#52b788",
    "#4d908e",
    "#abc4ff",
    "#cdb4db",
    "#CA9E67",
    "#B1804A",
    "#212529",
    "#001219",
  ];

  return (
    <div className="palette">
      {colours.map((colour) => {
        const activeColour =
          props.currentColour === colour ? "palette__swatch-active" : "";
        return (
          <div
            className="palette__swatch-wrapper"
            key={colour}
            onClick={() => {
              props.changeColour(colour);
            }}
          >
            <div className="palette__swatch-btn">
              <span
                className={`palette__swatch ${activeColour}`}
                style={{ backgroundColor: colour }}
              ></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
