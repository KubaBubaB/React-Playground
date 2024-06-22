import WheelFortune from "./WheelFortune";
import { useState } from "react";
import "./WheelNumberPicker.css";

function WheelNumberPicker() {
  const [numbers, updateNumbers] = useState<number[]>();
  const [tmpNumber, updateTmpNumber] = useState<number | undefined>();

  const appendNumber = (number: number | undefined) => {
    let newNumbers = numbers ? [...numbers] : [];
    if (number != null) {
      newNumbers.push(number);
      updateTmpNumber(undefined);
    }
    updateNumbers(newNumbers);
  };

  const replaceNumber = (number: number) => {
    updateTmpNumber(number);
  };

  const resetNumbers = () => {
    updateNumbers([]);
    updateTmpNumber(undefined);
  };

  return (
    <>
      <div className="container text-center">
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Your phone number is:</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">{numbers}!</div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    resetNumbers();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="my-3">Pick your phone number :)</p>
        <p className="my-3">
          Your number is: {numbers}
          <span className="tmpNumber">{tmpNumber}</span>
        </p>
        <WheelFortune appNumber={replaceNumber} />
        <div
          className="btn-group align-items-center my-4 mb-5"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-outline-danger col"
            onClick={() => resetNumbers()}
          >
            Reset
          </button>
          <button
            type="button"
            className="btn btn-outline-info col"
            onClick={() => appendNumber(tmpNumber)}
          >
            Next number
          </button>
          <button
            type="button"
            className="btn btn-outline-success col"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            onClick={() => appendNumber(tmpNumber)}
          >
            Finish
          </button>
        </div>
        {}
      </div>
    </>
  );
}

export default WheelNumberPicker;
