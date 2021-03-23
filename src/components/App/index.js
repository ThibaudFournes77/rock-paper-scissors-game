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

    const handleUserChoice = (choiceName) => {
        const choice = datas.find((data) => data.name === choiceName);
        setUserChoice(choice);
    }

    const handleOponentChoice = () => {
        const choice = chooseRandomPlay(datas);
        setOpponentChoice(choice);
    }

    useEffect(handleOponentChoice, [userChoice]);

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