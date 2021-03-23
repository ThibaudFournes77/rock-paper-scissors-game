import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;

    .footer__btn-rules {
        color: #FFFFFF;
        background: transparent;
        width: 120px;
        height: 40px;
        border: 1px solid #FFFFFF;
        border-radius: 10px;
    }

    @media screen and (min-width: 768px){
        justify-content: flex-end;
    }
`;