import React from 'react';
import Card from './Components/Card/index';
import GlobalStyle from './styles/global';
export const App: React.FC = () => {
    return (
        <>
            <Card titulo="Titulo" conteudo="Conteudo2" />
            <GlobalStyle />
        </>
    );
};

export default App;
