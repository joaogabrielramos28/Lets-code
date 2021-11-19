import React from 'react';
import GlobalStyle from './styles/global';
import Board from './Components/Board/index';
import { ActionsProvider } from './hooks/ActionsContext';
export const App: React.FC = () => {
    return (
        <>
            <ActionsProvider>
                <Board />
                <GlobalStyle />
            </ActionsProvider>
        </>
    );
};

export default App;
