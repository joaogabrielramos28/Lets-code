import React from 'react';
import { Container } from './styles';
import List from '../List/index';
import Card from '../Card/index';
import NewCard from '../NewCard/index';
const Board = () => {
    return (
        <Container>
            <List titulo="Novo">
                <NewCard />
            </List>
            <List titulo="To Do">
                <Card titulo="Titulo" conteudo="Conteudo" />
            </List>
            {/* <List titulo="Doing" />
            <List titulo="Done" /> */}
        </Container>
    );
};

export default Board;
