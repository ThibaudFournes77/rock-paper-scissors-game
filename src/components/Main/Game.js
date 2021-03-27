import React from 'react';

import { StyledGame } from './StyledMain';

function Game({ userChoice, oponentChoice, winner }) {

    const resultMessage = winner === 'player' ? 'YOU WIN'
                        : winner === 'oponent' ? 'YOU LOSE'
                        : 'EQUALITY';

    const resultPlayer = winner === 'player' ? 'is-winner' : '';
    const resultOponent = winner === 'oponent' ? 'is-winner' : '';

    return (
        <StyledGame>
            <div className="player">
                <span className={`btn-${userChoice.name} ${resultPlayer}`}></span>
                <p className="game-text">YOU PICKED</p>
            </div>
            {oponentChoice.name && (
                <div className="oponent">
                    <span className={`btn-${oponentChoice.name} ${resultOponent}`}></span>
                    <p className="game-text">THE HOUSE PICKED</p>
                </div>
            )}
            {winner && (
            <div className="message">
                <h2 className="message__title">{resultMessage}</h2>
                <button className="message__button">PLAY AGAIN</button>
            </div>
            )}
        </StyledGame>
    );
}

export default Game;
