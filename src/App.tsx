import React from 'react';
import GlobalStyle from './styles/global';
import Board from './Components/Board/index';
import { ToastContainer } from 'react-toastify';
import { ActionsProvider } from './hooks/ActionsContext';
export const App: React.FC = () => {
    return (
        <>
            <ActionsProvider>
                <Board />
                <GlobalStyle />
            </ActionsProvider>
            <ToastContainer theme={'dark'} />
        </>
    );
};

export default App;
