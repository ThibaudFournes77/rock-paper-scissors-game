import React from 'react';

import logo from 'src/assets/images/logo.svg';
import { StyledHeader } from './StyledHeader';

function Header({ score }) {
    return (
        <StyledHeader>
            <img src={logo} alt="" />
            <div className="score">
                <h2 className="score__title">SCORE</h2>
                <p className="score__value">{score}</p>
            </div>
        </StyledHeader>
    );
}

export default Header;
