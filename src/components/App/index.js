import React, { useEffect, useState } from 'react';

import GlobalFonts from 'src/fonts';
import { StyledApp } from './StyledApp';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import { chooseRandomPlay } from 'src/utils';
import datas from 'src/datas';

function App() {
    const [userChoice, setUserChoice] = useState({});
    const [oponentChoice, setOpponentChoice] = useState({});
    const [winner, setWinner] = useState('');
    const [score, setScore] = useState(0);
    const [gamesCount, setGamesCount] = useState(0);

    console.log(userChoice);

    const handleUserChoice = (choiceName) => {
        const choice = datas.find((data) => data.name === choiceName);
        setTimeout(() => {
            setUserChoice(choice);
        }, 2000);
    }

    const handleOponentChoice = () => {
        const choice = chooseRandomPlay(datas);
        setOpponentChoice(choice);
    }

    const handleWinner = () => {
        if(Object.keys(userChoice).length !== 0 && Object.keys(oponentChoice).length !== 0){
            setTimeout(() => {
                if(userChoice.name === oponentChoice.strongAgainst){
                    setWinner('oponent');
                }
                else if (userChoice.strongAgainst === oponentChoice.name){
                    setWinner('player');
                    setScore(score+1);
                }
                else if (userChoice.name === oponentChoice.name){
                    setWinner('nobody');
                }
                setGamesCount(gamesCount+1);
            }, 2000);
        }
    }

    useEffect(handleOponentChoice, [userChoice]);

    useEffect(handleWinner, [oponentChoice]);

    return (
        <div>
            <GlobalFonts />
            <StyledApp>
                <Header />
                <Main handleUserChoice={handleUserChoice} userChoice={userChoice} oponentChoice={oponentChoice} />
                <Footer />
            </StyledApp>
        </div>
    );
}

export default App;