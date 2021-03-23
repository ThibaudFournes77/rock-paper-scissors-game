import React from 'react';
import PropTypes from 'prop-types';

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

Main.propTypes = {
    handleUserChoice: PropTypes.func.isRequired,
}

export default Main;
