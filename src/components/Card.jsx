import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import getImage from "utils/images";

export default function Card(props) {
  const { value } = props;
  return (
    <div className="Card">
      <img src={getImage(value.image)} className="Card_img" alt="" />
      {value.date && value.price ? (
        <>
          <div className="Card_lineOne">
            <div className="date">{value.date}</div>
            <div className="price">{value.price}</div>
          </div>
          <div className="Card_lineOne">
            <span style={{ flex: 1, marginRight: 15 }}>
              <img src={getImage("userThumb")} className="userThumb" alt=""/>
              <div className="vr_line"></div>
              <img src={getImage("userThumb1")} className="userThumb" alt=""/>
            </span>
            <span className="body">
              <div className="requestedby">{value.requestedby}</div>
              <div className="title">{value.title}</div>
              <div className="desc">{value.desc}</div>
            </span>
          </div>
        </>
      ) : (
        <div className="Card_loading">
          <div className="loading1">
            <SkeletonTheme color="#8D8D8D" highlightColor="#444">
              <Skeleton circle={true} count={1} />
            </SkeletonTheme>
          </div>
          <div className="loading2">
            <SkeletonTheme color="#333333" highlightColor="#444">
              <Skeleton circle={true} count={1} />
            </SkeletonTheme>
          </div>
          <div className="loading3">
            <SkeletonTheme color="#333333" highlightColor="#444">
              <Skeleton circle={true} count={1} />
            </SkeletonTheme>
          </div>
          <div className="loading4">
            <SkeletonTheme color="#008D81" highlightColor="#444">
              <Skeleton circle={true} count={1} />
            </SkeletonTheme>
          </div>
        </div>
      )}
    </div>
  );
}
