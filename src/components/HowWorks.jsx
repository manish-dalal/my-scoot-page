import React from "react";

import getImage from "utils/images";

export default function HowWorks() {
  return (
    <div className="HowWorks">
      <div className="app-container center">
        <div className="title">
          How <span className="unerline-warpper">it works</span>
        </div>
        <div className="HowWorks_container">
          {[
            {
              image: "conversation",
              tile: "1.Send Your Interest",
              decription:
                "It’s free! Send your interest to the event host before seats for the event sell out."
            },
            {
              image: "vip",
              tile: "2. Get Selected",
              decription:
                "If the host accepts your invite, you will receive an email to purchase your tickets."
            },
            {
              image: "tickets",
              tile: "3. Reserve Your Spot",
              decription:
                "It’s free! Send your interest to the event host before seats for the event sell out."
            }
          ].map((value, key) => (
            <div key={`HowWorks-${key}`} className="HowWorks_card">
              <div className="img-wrapper">
                <img src={getImage(value.image)} alt="" />
              </div>
              <div className="card-title">{value.tile}</div>
              <div className="card-desc">{value.decription}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
