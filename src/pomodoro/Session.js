// //This determines if the session is active or not
import React from "react"
import {secondsToDuration,minutesToDuration} from "../utils/duration/index";
function Session({session, focusDuration, breakDuration,isTimerRunning,}){
   if(session === null){
        return null
    }
     const currentTimer = (session.label === "Focusing" ? focusDuration : breakDuration)
     const percent = ((currentTimer * 60 - session?.timeRemaining) / (currentTimer * 60)) * 100
    //return`Focusing for ${minutesToDuration(focus)} minutes`
    //return `On Break for ${minutesToDuration(breakTime)} minutes`
   //  function nullSession(session) {
   //   if(session.timeRemaining === 0) {
   //     return `On Break for ${minutesToDuration(breakTime)} minutes`
   //   } else {
   //     return `Focusing for ${minutesToDuration(focus)} minutes`
   //   } 
   // }
   function nullSession() {
     if(session?.label === "Focusing") {
       return `Focusing for ${minutesToDuration(focusDuration)} minutes`
     } else {
       return `On Break for ${minutesToDuration(breakDuration)} minutes`
     } 
   }
 
    
    return (
        <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {nullSession()/* ${session?.label} for 25:00 minutes  */}
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            <h2 style={{display: `${isTimerRunning ? "none" : "block" }`}}>PAUSED</h2>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percent} // TODO: Increase aria-valuenow as elapsed time increases
               style={{width: `${percent}%`}} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Session;