import React from 'react';

import { StyledChoice } from './StyledMain';

function Choice() {
    return (
        <StyledChoice>
            <button className="btn-paper"></button>
            <button className="btn-rock"></button>
            <button className="btn-scissors"></button>
        </StyledChoice>
    );
}

export default Choice;
