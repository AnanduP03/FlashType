import React from "react";
import TryAgain from "../Try Again/TryAgain";
import TypingChallengeContainer from "../Typing Challenge Container/TypingChallengeContainer";
import "./TestContainer.css";

const TestContainer=({startAgain,onInputChange,selectedParagraph,timeRemaining,timerStarted,words,characters,wpm,testInfo})=>{
    return(
        <div className="test-container">
        {
            timeRemaining>0?(
                <div data-aos="fade-up" className="typing-challenge-container">
                    <TypingChallengeContainer
                    selectedParagraph={selectedParagraph}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    words={words} 
                    characters={characters} 
                    wpm={wpm}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                     />
                </div>
            ):(
                <div className="try-again-cont">
                    <TryAgain startAgain={startAgain} words={words} characters={characters} wpm={wpm}/>
                </div>
            )
        }
        </div>
    )
}

export default TestContainer;