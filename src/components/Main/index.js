import React from 'react';

import Choice from './Choice';
import Game from './Game';

import { StyledMain } from './StyledMain';

function Main() {
    return (
        <StyledMain>
            <Choice />
            <Game />
        </StyledMain>
    );
}

export default Main;
