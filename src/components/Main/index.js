import React from 'react';
import PropTypes from 'prop-types';

import Choice from './Choice';
import Game from './Game';

import { StyledMain } from './StyledMain';

function Main({ handleUserChoice, userChoice, oponentChoice }) {
    console.log('userChoice', Object.keys(userChoice).length);
    return (
        <StyledMain>
            {Object.keys(userChoice).length === 0 ? (
                <Choice handleUserChoice={handleUserChoice} />
            ) : (
                <Game userChoice={userChoice} oponentChoice={oponentChoice} />
            )}
        </StyledMain>
    );
}

Main.propTypes = {
    handleUserChoice: PropTypes.func.isRequired,
}

export default Main;
