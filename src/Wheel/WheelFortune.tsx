import React, { useRef, useEffect, useState } from "react";
import "./WheelFortune.css";

const segments = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const segmentAngle = 360 / segments.length;

const drawWheel = (canvas: HTMLCanvasElement, rotation: number) => {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = centerX;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate((rotation * Math.PI) / 180);

  for (let i = 0; i < segments.length; i++) {
    const startAngle = (i * segmentAngle * Math.PI) / 180;
    const endAngle = ((i + 1) * segmentAngle * Math.PI) / 180;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, startAngle, endAngle);
    ctx.fillStyle = i % 2 === 0 ? "#f8b400" : "#ffcc00";
    ctx.fill();
    ctx.stroke();

    ctx.save();
    ctx.rotate(startAngle + (endAngle - startAngle) / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = "14px Arial";
    ctx.fillText(segments[i], radius - 10, 10);
    ctx.restore();
  }
  ctx.restore();
};

interface WheelFortuneProps {
  appNumber: (number: number) => void;
}

function WheelFortune(wheelFortuneProps: WheelFortuneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [chosenSegment, setChosenSegment] = useState<string | null>(null);
  const [animationFrame, setAnimationFrame] = useState<number | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawWheel(canvasRef.current, rotation);
    }
  }, [rotation]);

  const animateRotation = (start: number, end: number, duration: number) => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentRotation = start + (end - start) * progress;
      setRotation(currentRotation);

      if (progress < 1) {
        setAnimationFrame(requestAnimationFrame(animate));
      } else {
        setIsSpinning(false);
        const finalAngle = currentRotation % 360;
        const selectedIndex =
          Math.floor((360 - finalAngle) / segmentAngle) % segments.length;
        setChosenSegment(segments[selectedIndex]);
        wheelFortuneProps.appNumber(selectedIndex);
      }
    };
    setAnimationFrame(requestAnimationFrame(animate));
  };

  const spinWheel = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      const randomDegree = Math.floor(Math.random() * 360) + 360 * 5; // Ensure multiple full rotations
      animateRotation(rotation, rotation + randomDegree, 3000); // 3 seconds duration
    }
  };

  useEffect(() => {
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [animationFrame]);

  return (
    <>
      <div className="wheel-fortune my-4">
        <div className={"row position-relative"}>
          <canvas
            ref={canvasRef}
            width="300"
            height="300"
            className="wheel-canvas col"
            onClick={spinWheel}
          ></canvas>
          <img
            src={require("./arrow.png")}
            alt={"arrow pointing at the wheel"}
            className={"arrowPicture col position position-absolute"}
          />
        </div>

        <button
          className="mt-4 btn btn-warning"
          type="button"
          onClick={spinWheel}
          disabled={isSpinning}
        >
          {isSpinning ? "Spinning..." : "Spin the Wheel"}
        </button>
      </div>
    </>
  );
}

export default WheelFortune;
