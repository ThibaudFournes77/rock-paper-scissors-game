import React from 'react';

import { StyledGame } from './StyledMain';

function Game({ userChoice, oponentChoice }) {
    return (
        <StyledGame>
            <div className="player">
                <span className={`btn-${userChoice.name}`}></span>
                <p className="game-text">YOU PICKED</p>
            </div>
            <div className="oponent">
                <span className={`btn-${oponentChoice.name}`}></span>
                <p className="game-text">THE HOUSE PICKED</p>
            </div>
            <div className="message">
                <h2 className="message__title">YOU WIN</h2>
                <button className="message__button">PLAY AGAIN</button>
            </div>
        </StyledGame>
    );
}

export default Game;
