import React from "react";

import getImage from "utils/images";

export default function HomeGrid() {
  return (
    <div className="HomeGrid">
      <div className="app-container center">
        <div className="HomeGrid_title">MYSCOOT SOCIAL EXPERIENCES</div>
        <div className="HomeGrid_subTitle">
          Where making friends is as easy as showing up
        </div>
        <div className="HomeGrid_cardContainer">
          {[
            { image: "gridImg1", height: 616, width: 457 },
            { image: "bg2", height: 410, width: 545 },
            { image: "gridImg3", height: 219, width: 288 },
            { image: "gridImg4", height: 219, width: 290 },
            { image: "gridImg5", height: 200, width: 267 },
            { image: "gridImg6", height: 200, width: 267 },
            { image: "gridImg7", height: 388, width: 288 },
            { image: "gridImg8", height: 388, width: 290 }
          ].map((value, key) => (
            <a
              key={`HomeGrid-${key}`}
              className={`item${key + 1}`}
              href="#/detail"
            >
              <img src={getImage(value.image)} className="item-img" alt="" />
            </a>
          ))}
        </div>
        <div className="HomeGrid_scrollTo">
          <div>Scroll to explore</div>
          <div>&#8595;</div>
        </div>
      </div>
    </div>
  );
}
