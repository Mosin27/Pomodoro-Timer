import React from "react";

function ProgressBar( { session, breakDuration, focusDuration }) {

    let duration = session?.label === "Focusing" ? focusDuration * 60 :  breakDuration * 60;
    let progress = ((duration - session?.timeRemaining) / duration) * 100;

    return (
        <div className="row mb-2-blue">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
                <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progress} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${progress}%` }} // TODO: Increase width % as elapsed time increases
                />
            </div>
          </div>
        </div>
  );
}

export default ProgressBar;