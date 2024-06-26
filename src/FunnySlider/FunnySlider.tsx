import "./FunnySlider.css";
import CSS from "csstype";
import { useState, useEffect } from "react";

interface FunnySliderProps {}

function FunnySlider() {
  const [dotPosition, setDotPosition] = useState(5);
  const [percentage, setPercentage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  let dotObject: CSS.Properties = {
    position: "relative",
    backgroundColor: "black",
    width: "16px",
    height: "16px",
    top: "-72px",
    left: String(dotPosition) + "%",
    borderRadius: "16px",
    cursor: "pointer",
  };

  const handleCalculations = (x: number) => {
    console.log("mousePos: " + x);
    if (x === 0) {
      // on drag end
      return;
    } else if (x <= 665) {
      x = 665;
    } else if (x > 835) {
      x = 835;
    }
    x -= 665;
    setDotPosition(5 + x / 2);
    x /= 170;
    x *= 100;
    const newPercentage = Math.log10(x * 100000 + 1) * (100 / 6.9);

    newPercentage <= 100
      ? setPercentage(Math.ceil(newPercentage))
      : setPercentage(100);
  };

  useEffect(() => {
    const increasePercentage = () => {
      if (!isDragging) {
        handleCalculations(dotPosition * 2 + 655.5);
      }
    };

    const interval = setInterval(increasePercentage, 100); // Increase percentage every second
    return () => clearInterval(interval);
  }, [dotPosition, isDragging]);

  return (
    <>
      <div>
        <div className={"myOuterContainer"}>
          <div className={"myInnerContainer"}>
            <p className={"sliderTitle"}>
              Please rate your satisfaction with our services:
            </p>
            <p className={"innerInnerContainer"}></p>
            <p
              style={dotObject}
              draggable
              onDragStart={() => setIsDragging(true)}
              onDrag={(event) => handleCalculations(event.clientX)}
              onDragEnd={() => setIsDragging(false)}
            ></p>
            <p className={"satisfactionMeter"}>Satisfaction: {percentage}%</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FunnySlider;
