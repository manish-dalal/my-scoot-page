import React from "react";
import { Button } from "reactstrap";

import HomeGrid from "components/HomeGrid";
import HowWorks from "components/HowWorks";
import Card from "components/Card";
import CommonContent from "components/CommonContent";

const Home = props => {
  return (
    <div className="Home">
      <HomeGrid />
      <HowWorks />
      <div className="Home_container">
        <div className="app-container center">
          <div className="popular">
            Popular experiences in <span className="Gurgaon">Gurgaon</span>
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
            <Button outline color="warning">
              See all (32)
            </Button>
          </div>
          <div className="popular">
            Recommended experiences for{" "}
            <span className="Gurgaon">this weekend</span>
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
};

export default Home;
