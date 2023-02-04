import React from "react";
import ChallengeDetailsCard from "../Challenge Details Card/ChallengeDetailsCard";
import TypingChallenge from "../Typing Challenge/TypingChallenge";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer=({onInputChange,testInfo,selectedParagraph,timeRemaining,timerStarted,words,characters,wpm})=>{
    return(
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard cardTitle="Words" cardValue={words}/>
                {/* Characters Typed */}
                <ChallengeDetailsCard cardTitle="Characters" cardValue={characters}/>
                {/* Speed */}
                <ChallengeDetailsCard cardTitle="Speed" cardValue={wpm}/>
            </div>
            {/* Challenge Section */}
            <div className="typing-area-container">
                <TypingChallenge onInputChange={onInputChange} testInfo={testInfo} timeRemaining={timeRemaining} timerStarted={timerStarted} selectedParagraph={selectedParagraph}/>
            </div>
        </div>
    )
}

export default TypingChallengeContainer;