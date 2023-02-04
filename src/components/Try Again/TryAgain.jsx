import React from "react";
import "./TryAgain.css";

const TryAgain=({startAgain,words,characters,wpm})=>{
    return(
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters: </b>{characters}<br/>
                    <b>Words: </b>{words}<br/>
                    <b>wpm: </b>{wpm}
                </p>
            </div>
            <div className="">
                <button onClick={()=>{
                    startAgain()
                }} className="end-buttons start-again-btn">
                    Retry
                </button>
            </div>
        </div>
    )
}

export default TryAgain;