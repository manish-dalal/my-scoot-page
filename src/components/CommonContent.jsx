import React from "react";
import { Button } from "reactstrap";

import getImage from "utils/images";
import Card from "components/Card";

export default function CommonContent() {
  return (
    <>
      <div className="LetsMeet">
        <div className="app-container center">
          <div className="LetsMeet_row">
            <div>
              <div className="title">
                Let’s <span className="unerline-warpper">meet, experience</span>{" "}
                and <span className="unerline-warpper">share</span>
              </div>
              <div className="description">
                People attend MyScoot experiences to have fun and meet new
                people who share similar interests and experiences.
              </div>
            </div>
            <img src={getImage("videoIcon")} alt="" />
          </div>
          <div className="event-wrapper">
            <div
              className="item"
              style={{
                transform: "translateY(160px)",

                backgroundImage: `url(${getImage("WhatsApp1")})`,
                backgroundSize: "cover"
              }}
            >
              House Pool Party Diaries
            </div>
            <div
              className="item"
              style={{
                transform: "translateY(120px)",
                backgroundImage: `url(${getImage("WhatsApp2")})`,
                backgroundSize: "cover"
              }}
            >
              Wanderlust Socials Travel Stories
            </div>
            <div
              className="item"
              style={{
                transform: "translateY(160px)",
                backgroundImage: `url(${getImage("WhatsApp3")})`,
                backgroundSize: "cover"
              }}
            >
              House Pool Party Diaries
            </div>
          </div>
        </div>
      </div>

      <div className="Home_container" style={{ paddingTop: 180 }}>
        <div className="app-container center">
          <div className="popular">Experiences across India</div>
          <div className="Card_warpper" style={{ flexWrap: "wrap" }}>
            {[
              {
                image: "card1"
              },
              {
                image: "card2"
              },
              {
                image: "card3"
              },
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
              See all (32)
            </Button>
          </div>
        </div>
      </div>

      <div
        className="HOSTING"
        style={{
          backgroundImage: `url(${getImage("footerBg")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: 400
        }}
      >
        <div className="app-container center">
          <div style={{ alignSelf: "flex-start" }}>
            <div className="title">HOSTING WITH MYSCOOT</div>
            <div className="desc">
              It pays to make people happy. Become a host and start earning.
            </div>
            <Button color="secondary">Learn more</Button>
          </div>
        </div>
      </div>
      <div className="Download">
        <div className="app-container center">
          <div className="Download_row">
            <div>
              <div className="title">
                <span className="unerline-warpper">Download</span> our{" "}
                <span className="unerline-warpper">mobile app</span> and{" "}
                <span className="unerline-warpper">never miss out</span>
              </div>
              <div className="desc">Get the app.</div>
              <div>
                <span style={{ marginRight: 20 }}>
                  <img
                    src={getImage("apple")}
                    height={45}
                    width={150}
                    alt=""
                  ></img>
                </span>
                <span>
                  <img
                    src={getImage("google")}
                    height={45}
                    width={150}
                    alt=""
                  ></img>
                </span>
              </div>
            </div>
            <img src={getImage("phone")} alt=""></img>
          </div>
        </div>
      </div>
      <div className="Footer" />
    </>
  );
}
