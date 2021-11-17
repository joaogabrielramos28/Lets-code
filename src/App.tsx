import React from 'react';
import Card from './Components/Card/index';
import GlobalStyle from './styles/global';
import Board from './Components/Board/index';
export const App: React.FC = () => {
    return (
        <>
            <Board />
            <GlobalStyle />
        </>
    );
};

export default App;
