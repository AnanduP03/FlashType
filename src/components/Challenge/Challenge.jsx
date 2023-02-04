import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./Challenge.css";

const Challenge=(props)=>{
    return(
        <div className="challenge-container">
            <h1 data-aos="fade-down" className="challenge-header">Take a speed test now!</h1>
            <TestContainer startAgain={props.startAgain} onInputChange={props.onInputChange} testInfo={props.testInfo} timeRemaining={props.timeRemaining} selectedParagraph={props.selectedParagraph} timerStarted={props.timerStarted} words={props.words} characters={props.characters} wpm={props.wpm}/>
        </div>
    )
}

export default Challenge;