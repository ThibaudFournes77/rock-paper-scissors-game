import React, { useState } from 'react';

import GlobalFonts from 'src/fonts';
import { StyledApp } from './StyledApp';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

function App() {
    const [userChoice, setUserChoice] = useState();

    const handleUserChoice = (choice) => {
        console.log(choice);
        setUserChoice(choice);
    }

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