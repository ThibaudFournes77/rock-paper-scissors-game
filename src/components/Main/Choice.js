import React from 'react';

import { StyledChoice } from './StyledMain';

function Choice({ handleUserChoice }) {

    const onClick = (e) => {
        handleUserChoice(e.target.value);
    }

    return (
        <StyledChoice>
            <button className="btn-paper" value="paper" onClick={onClick}></button>
            <button className="btn-rock" value="rock" onClick={onClick}></button>
            <button className="btn-scissors" value="scissors" onClick={onClick}></button>
        </StyledChoice>
    );
}

export default Choice;
