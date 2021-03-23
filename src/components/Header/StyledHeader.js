import styled from 'styled-components';

export const StyledHeader = styled.header`
    border: 2px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    height: 90px;
    padding: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10vh;

    @media screen and (min-width: 768px){
        height: 120px;
    }

    img{
        max-width: 50%;
        height: auto;
    }

    .score {
        background-color: #FFFFFF;
        width: 80px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid hsl(237, 49%, 15%);
        border-radius: 5px;

        &__title{
            color: hsl(229, 64%, 46%);
            font-size: 11px;
            font-weight: 600;
        }

        &__value {
            color: hsl(229, 25%, 31%);
            font-size: 32px;
            font-weight: 700;
        }
    }
`;