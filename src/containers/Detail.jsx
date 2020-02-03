import React from "react";
import { Button } from "reactstrap";

import getImage from "utils/images";
import Card from "components/Card";
import CommonContent from "components/CommonContent";

export default function Detail() {
  return (
    <div className="Home">
      <div className="Detail">
        <div
          style={{
            backgroundImage: `url(${getImage("Detailbg2")})`,
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundRepeat: "no-repeat",
            minHeight: 400,
            top: 0,
            width: "100%",
            position: "absolute"
          }}
        ></div>
        <img src={getImage("Detailbg1")} style={{ width: "80%" }} alt="" />
        <div
          className="Detail_img"
          style={{
            backgroundImage: `url(${getImage("Detailbg1")})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "80%",
            top: 0,
            minHeight: 600,
            position: "absolute"
          }}
        >
          <div style={{ width: "70%" }}>
            <div className="title">
              <div className="line"></div>
              Live Music
            </div>
            <div className="subTitle">Because music is</div>
            <div className="subTitle-2">food for the soul</div>
          </div>
        </div>
      </div>
      <div className="Home_container">
        <div className="app-container center">
          <div className="popular">
            I’m in mood for <span className="Gurgaon">live music events</span>{" "}
            in <span className="Gurgaon">any city</span> during{" "}
            <span className="Gurgaon">this weekend</span>
          </div>
          <div className="Card_warpper">
            {[
              {
                image: "card1",
                date: "Fri 11 Oct | 07:00 PM | Hauz Khas Village",
                price: "$300",
                title: "MyScoot Socials Movie Night",
                requestedby: "Requested by Riya Gupta and 30 others",
                desc: "Request invite for free"
              },
              {
                image: "card2",
                date: "Fri 11 Oct | 07:00 PM | Hauz Khas Village",
                price: "$500",
                title: "MyScoot Socials Movie Night",
                requestedby: "Requested by Riya Gupta and 30 others",
                desc: "Request invite for free"
              },
              {
                image: "card3",
                date: "Fri 11 Oct | 07:00 PM | Hauz Khas Village",
                price: "$1300",
                title: "MyScoot Socials Movie Night",
                requestedby: "Requested by Riya Gupta and 30 others",
                desc: "Request invite for free"
              }
            ].map((value, key) => (
              <Card value={value} key={`homeCard-${key}`} />
            ))}
          </div>
          <div className="Card_warpper">
            {[
              {
                image: "card1"
              },
              {
                image: "card2"
              },
              {
                image: "card3"
              }
            ].map((value, key) => (
              <Card value={value} key={`homeCard-${key}`} />
            ))}
          </div>
          <div className="Card_warpper">
            <Button outline color="warning">
              See all (16)
            </Button>
          </div>
        </div>
      </div>
      <CommonContent />
    </div>
  );
}
