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

    const handleUserChoice = (choiceName) => {
        const choice = datas.find((data) => data.name === choiceName);
        setUserChoice(choice);
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
                }
                else if (userChoice.name === oponentChoice.name){
                    setWinner('nobody');
                }
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
                <Main handleUserChoice={handleUserChoice} />
                <Footer />
            </StyledApp>
        </div>
    );
}

export default App;