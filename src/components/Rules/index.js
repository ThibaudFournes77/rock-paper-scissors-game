import React from 'react';

import imgRules from 'src/assets/images/image-rules.svg';
import iconClose from 'src/assets/images/icon-close.svg';
import { StyledRules } from './StyledRules';

function Rules({ toggleRules }) {
    return (
        <StyledRules>
            <div className="rules">
                <div className="rules__header">
                    <h2 className="rules__title">RULES</h2>
                    <button className="rules__close" onClick={() => toggleRules()}>
                        <img src={iconClose} alt="" className="rules__close-img" />
                    </button>
                </div>
                <img src={imgRules} alt="" className="rules__img" />
            </div>
        </StyledRules>
    );
}

export default Rules;
