import React from 'react';
import PropTypes from 'prop-types';

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

Choice.propTypes = {
    handleUserChoice: PropTypes.func.isRequired,
}

export default Choice;
