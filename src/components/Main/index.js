import React from 'react';

import Choice from './Choice';
import Game from './Game';

import { StyledMain } from './StyledMain';

function Main({ handleUserChoice }) {
    return (
        <StyledMain>
            <Choice handleUserChoice={handleUserChoice} />
        </StyledMain>
    );
}

export default Main;
