import "./ButtonRun.css";
import CSS from "csstype";
import { useState } from "react";

function ButtonRun() {
  let leftPos: number = 47;
  let topPos: number = 50;
  const [speed, setSpeed] = useState(1000);
  let startTime = Date.now();
  const [buttonPosition, setButtonPosition] = useState([leftPos, topPos]);

  let buttonStyle: CSS.Properties = {
    position: "relative",
    left: String(buttonPosition[0]) + "%",
    top: String(buttonPosition[1]) + "%",
  };

  const moveButton = () => {
    if (Date.now() - startTime < speed) {
      return;
    } else {
      startTime = Date.now();
      const leftTmpPos = Math.floor(Math.random() * 80 + 10);
      const topTmpPos = Math.floor(Math.random() * 80 + 10);
      setButtonPosition([leftTmpPos, topTmpPos]);
    }
  };

  const speedUp = () => {
    const leftTmpPos = Math.floor(Math.random() * 80 + 10);
    const topTmpPos = Math.floor(Math.random() * 80 + 10);
    setButtonPosition([leftTmpPos, topTmpPos]);
    setSpeed(speed - 150);
  };

  return (
    <>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Congrats!</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            {speed >= 200 ? (
              <div className="modal-body">
                You clicked the button! Speeding up!
              </div>
            ) : (
              <div className="modal-body">
                You clicked the fastest moving button!
              </div>
            )}

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => speedUp()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="outerContainer">
        <button
          className="btn btn-dark btn-lg "
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          style={buttonStyle}
          onMouseOverCapture={() => moveButton()}
        >
          Click Me!
        </button>
      </div>
    </>
  );
}

export default ButtonRun;
