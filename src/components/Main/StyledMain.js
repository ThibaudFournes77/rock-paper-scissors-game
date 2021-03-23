import styled from 'styled-components';
import rockIcon from 'src/assets/images/icon-rock.svg';
import paperIcon from 'src/assets/images/icon-paper.svg';
import scissorsIcon from 'src/assets/images/icon-scissors.svg';
import bgTriangle from 'src/assets/images/bg-triangle.svg';

export const StyledMain = styled.main`

    height: 50vh;

    .btn-rock{
        background: url(${rockIcon}) center  no-repeat #FFFFFF;
        border-radius: 50%;
        width: 120px;
        height: 100px;
    }

    .btn-paper{
        background: url(${paperIcon}) center  no-repeat #FFFFFF;
        border-radius: 50%;
        width: 120px;
        height: 100px;
    }

    .btn-scissors{
        background: url(${scissorsIcon}) center no-repeat #FFFFFF;
        border-radius: 50%;
        width: 120px;
        height: 100px;
    }
`;

export const StyledChoice = styled.div`
    background-image: url(${bgTriangle});
    background-size: 200px;
    background-repeat: no-repeat;
    background-position: center;
    width: 200px;
    height: 220px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .btn-paper{
        width: 80px;
        height: 80px;
        background-size: 30px;
        border: 8px solid hsl(230, 89%, 65%);
        box-shadow: inset 0 3px #ccc, 0 3px hsl(230, 89%, 62%);
    }

    .btn-scissors{
        width: 80px;
        height: 80px;
        background-size: 30px;
        border: 8px solid hsl(40, 84%, 53%);
        box-shadow: inset 0 3px #ccc, 0 3px hsl(39, 89%, 49%);
    }

    .btn-rock{
        width: 80px;
        height: 80px;
        align-self: flex-end;
        background-size: 30px;
        border: 8px solid hsl(349, 70%, 56%);
        box-shadow: inset 0 3px #ccc, 0 3px hsl(349, 71%, 52%);
    }

    @media screen and (min-width: 768px){
        background-size: 400px;
        width: 430px;
        height: 440px;

        .btn-paper{
            width: 180px;
            height: 180px;
            background-size: 70px;
            border: 15px solid hsl(230, 89%, 65%);
            box-shadow: inset 0 10px #ccc, 0 10px hsl(230, 89%, 62%);
        }

        .btn-scissors{
            width: 180px;
            height: 180px;
            background-size: 70px;
            border: 15px solid hsl(40, 84%, 53%);
            box-shadow: inset 0 10px #ccc, 0 10px hsl(39, 89%, 49%);
        }

        .btn-rock{
            width: 180px;
            height: 180px;
            align-self: flex-end;
            background-size: 70px;
            border: 15px solid hsl(349, 70%, 56%);
            box-shadow: inset 0 10px #ccc, 0 10px hsl(349, 71%, 52%);
        }
    }
`;

export const StyledGame = styled.div`

    margin-top: 100px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 50vh;

    .player, .oponent{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

    .btn-paper{
        width: 80px;
        height: 80px;
        background-size: 30px;
        border: 8px solid hsl(230, 89%, 65%);
        box-shadow: inset 0 3px #ccc, 0 3px hsl(230, 89%, 62%);
    }

    .btn-scissors{
        width: 80px;
        height: 80px;
        background-size: 30px;
        border: 8px solid hsl(40, 84%, 53%);
        box-shadow: inset 0 3px #ccc, 0 3px hsl(39, 89%, 49%);
    }

    .btn-rock{
        width: 80px;
        height: 80px;
        background-size: 30px;
        border: 8px solid hsl(349, 70%, 56%);
        box-shadow: inset 0 3px #ccc, 0 3px hsl(349, 71%, 52%);
    }

    .game-text{
        color: #FFFFFF;
        font-weight: 500;
        margin-top: 3vh;
    }

    .message{
        
        height: 20vh;
        margin-left: 20vw;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__title{
            color: #FFFFFF;
            font-size: 2em;
            font-weight: 700;
            margin-bottom: 20px;
        }

        &__button{
            background-color: #FFFFFF;
            color: hsl(229, 25%, 31%);
            font-size: 12px;
            text-align: center;
            height: 30px;
            width: 100px;
            border: none;
            border-radius: 10px;
        }
    }

    @media screen and (min-width: 768px){

        position: relative;

        .btn-paper{
            width: 28vw;
            height: 28vw;
            background-size: 10vw;
            border: 32px solid hsl(230, 89%, 65%);
            box-shadow: inset 0 16px #ccc, 0 16px hsl(230, 89%, 62%);
        }
    
        .btn-scissors{
            width: 28vw;
            height: 28vw;
            background-size: 10vw;
            border: 32px solid hsl(40, 84%, 53%);
            box-shadow: inset 0 16px #ccc, 0 16px hsl(39, 89%, 49%);
        }
    
        .btn-rock{
            width: 28vw;
            height: 28vw;
            background-size: 10vw;
            border: 32px solid hsl(349, 70%, 56%);
            box-shadow: inset 0 16px #ccc, 0 16px hsl(349, 71%, 52%);
        }

        .player, .oponent{
            flex-direction: column-reverse;
            width: 25%;
        }

        .game-text{
            margin-bottom: 3vh;
        }

        .message{
        
            height: 20vh;
            position: absolute;
            top: 45%;
            left: 20%;
    
            &__title{
                font-size: 2em;
                font-weight: 700;
            }
    
            &__button{
                font-size: 20px;
                height: 60px;
                width: 200px;
                padding: 7% 0;
            }
        }

        .is-winner {
            -webkit-box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.09), 0 0 0 70px rgba(255, 255, 255, 0.06), 0 0 0 120px rgba(255, 255, 255, 0.03);
              box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.09), 0 0 0 70px rgba(255, 255, 255, 0.06), 0 0 0 120px rgba(255, 255, 255, 0.03);
          }
    }
`;