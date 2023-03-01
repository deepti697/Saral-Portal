import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./HomeFeed.css";
const fadeImages = [
  {
    url: "https://lh3.googleusercontent.com/AJ21RXjTVcGlJxYY4eqVu0xfw4lNULkMtwHPytDp42QNPMTz-jsCKpiF-iLckuqS2lpwbr5gsTIvPLkZ7n0JLk-j_uOCBwEYWaMkkhU",
  },
  {
    url: "https://lh3.googleusercontent.com/WwsfTde9_Du9S0BmnAxcKjtDO1giFqF368-qlq7Q3Euh3fSy8PMdfPsPMA1DhVBBG4SikbyJ3BKcB6naZzDlIG0GU54bC8a-tfWiwzkWPw",
  },
  {
    url: "https://lh3.googleusercontent.com/FKuyM_SsxG668LyqtB29HM0i0qJmFz5W_EPIUAWN65EDCtS1YBKMnNRgCejhfWJDfOvDf_IiSypQ0yDWDk0ipA4vCPrbAXMGOMLaRdSE",
  },
  {
    url:"https://lh3.googleusercontent.com/9XtiT4Wx8mqInE3EMlZiz3RpnwZSKwnCjZiqGCBV-6ADZC7fBgdSW5zpicS0RMDvzd73U6bsihQHn_yg21W2Wy1BoyqLRDPYRfaz6LU",
  },
  {
    url: "https://www.collabriacreditcards.ca/webres/Image/Welcome%20Points/2023%20Welcome%20Points%20-%20Landing%20Page%20Banner%20-%201024x400%20-%20Set%204%20-%20ENG.png",
  }
];
let count = 0;
export default function ImageChange() {
  return (
    <>
      <div
        style={{
          width: "auto",
          height: 520,
          color: "black",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container ade-in-image homefeed">
                  <img className="img1" width="100%" height="500px" src={fadeImage.url}/>
                  {/* <div class="indicator"></div> */}
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
}

