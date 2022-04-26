import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import "./PhotoCollage.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import screenshot1 from "./Images/Screenshot1.png";
import screenshot2 from "./Images/Screenshot2.png";
import screenshot3 from "./Images/Screenshot3.png";
import screenshot4 from "./Images/Screenshot4.png";
import character from "./Images/character.png";
import howTo from "./Images/how-to.png";

function PhotoCollage() {
  const images = [screenshot1, screenshot2, screenshot3, screenshot4];
  return (
    <div>
      <PhotoProvider>
        <div className="slideshow">
          <div className="foo">
            <div className="photo-row">
              <PhotoView src={screenshot1}>
                <img
                  src={screenshot1}
                  alt=""
                  style={{
                    flex: 1,
                    width: "45%",
                  }}
                />
              </PhotoView>
              <PhotoView src={screenshot2}>
                <img
                  src={screenshot2}
                  alt=""
                  style={{ flex: 1, width: "45%" }}
                />
              </PhotoView>
            </div>
            <div className="photo-row">
              <PhotoView src={screenshot3}>
                <img
                  src={screenshot3}
                  alt=""
                  style={{ flex: 1, width: "45%" }}
                />
              </PhotoView>
              <PhotoView src={screenshot4}>
                <img
                  src={screenshot4}
                  alt=""
                  style={{ flex: 1, width: "45%" }}
                />
              </PhotoView>
            </div>
            <div className="photo-row">
              <PhotoView src={character}>
                <img src={character} alt="" style={{ flex: 1, width: "45%" }} />
              </PhotoView>
              <PhotoView src={howTo}>
                <img src={howTo} alt="" style={{ flex: 1, width: "45%" }} />
              </PhotoView>
            </div>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
}

export default PhotoCollage;
