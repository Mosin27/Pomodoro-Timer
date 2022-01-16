import React from "react";
import ProgressBar from "./ProgressBar";


function Session({ session, minutesToDuration, secondsToDuration, focusDuration, breakDuration, isTimerRunning }) {
    
   if (session) { 
    return (
        <>
        <div className="row mb-2">
            <div className="col">
                {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
                <h2 data-testid="session-title">
                    {session.label} for {minutesToDuration(session.label === "Focusing" ? focusDuration : breakDuration)} minutes
                 </h2>
                {/* TODO: Update message below correctly format the time remaining in the current session */}
                 <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(session?.timeRemaining)} remaining
                </p>
                <h3>{isTimerRunning}</h3>
            </div>
        </div>
            <ProgressBar session={session} focusDuration={focusDuration} breakDuration={breakDuration} />
        </> 
    )
   } else {
       return null;
   } 
    
}

export default Session;