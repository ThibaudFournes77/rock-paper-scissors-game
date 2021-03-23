import { createGlobalStyle } from 'styled-components';

import Barlow from './assets/fonts/BarlowSemiCondensed-Regular.ttf';

export default createGlobalStyle`
    @font-face{
        font-family: 'Barlow';
        src: local('Barlow'), url(${Barlow}) format('ttf');
    }
`;