import React from 'react';

import { StyledFooter } from './StyledFooter';

function Footer({ toggleRules }) {
    return (
        <StyledFooter>
            <button className="footer__btn-rules" onClick={() => toggleRules()}>RULES</button>
        </StyledFooter>
    );
}

export default Footer;
