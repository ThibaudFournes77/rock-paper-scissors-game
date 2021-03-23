import React from 'react';

import GlobalFonts from 'src/fonts';
import { StyledApp } from './StyledApp';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

function App() {
    return (
        <div>
            <GlobalFonts />
            <StyledApp>
                <Header />
                <Main />
                <Footer />
            </StyledApp>
        </div>
    );
}

export default App;