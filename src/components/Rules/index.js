import React from 'react';

import imgRules from 'src/assets/images/image-rule.svg';
import StyledRules from './StyledRules';

function Rules() {
    return (
        <StyledRules>
            <div className="rules">
                <h2 className="rules__title">RULES</h2>
                <img src={imgRules} alt="" className="rules__img" />
                <button className="rules__close"></button>
            </div>
        </StyledRules>
    );
}

export default Rules;
