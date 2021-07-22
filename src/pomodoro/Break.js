import React from "react"

function Break({breakDuration,setBreakDuration, disableButton}){
   
    function helper(num){
        if(num < 10){
          return  '0'
        }
        return ''
      }
  
        function handleIncreaseBreak(){
         if(breakDuration >= 15) return
          const newValue = breakDuration+ 1
         setBreakDuration(newValue)
       }
      
        function handleDecreaseBreak(){
          if(breakDuration <= 1) return 
          const newValue = breakDuration- 1
          setBreakDuration(newValue)
        }

        return (
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                {`Break Duration: ${helper(breakDuration)}${breakDuration}:00`}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={()=>{handleDecreaseBreak()}}
                  disabled={disableButton}
             
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={()=>{handleIncreaseBreak()}}
                  disabled={disableButton}

                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
            
        )
}

export default Break;