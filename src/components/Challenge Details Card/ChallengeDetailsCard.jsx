import React from "react";
import "./ChallengeDetailsCard.css";

const ChallengeDetailsCard=({cardTitle, cardValue})=>{
    return(
        <div className="details-card-container">
            <div className="card-title">{cardTitle}</div>
            <div className="card-value">{cardValue}</div>
        </div>
    )
}

export default ChallengeDetailsCard;