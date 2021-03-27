import styled from 'styled-components';
import iconClose from 'src/assets/images/icon-close.svg';

export const StyledRules = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5;

    .rules{
        position: fixed;
        top: 30%;
        left: 30%;
        background-color: #FFFFFF;
        padding: 3% 5%;
        z-index: 10;
        border-radius: 10px;

        &__header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10%;
        }

        &__title{
            color: hsl(229, 25%, 31%);
            font-size: 32px;
            font-weight: 700;
        }

        &__close{
            border: none;
            background-color: #FFFFFF;
        }
    }
`;