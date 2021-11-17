import React from 'react';
import { Container } from './styles';
import List from '../List/index';
const Board = () => {
    return (
        <Container>
            <List titulo="Novo" />
            <List titulo="To Do" />
            <List titulo="Doing" />
            <List titulo="Done" />
        </Container>
    );
};

export default Board;
