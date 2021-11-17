import React from 'react';
import { Container, CardList } from './styles';

interface ListProps {
    titulo: string;
    children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ titulo, children }: ListProps) => {
    return (
        <Container>
            <h2>{titulo}</h2>
            <CardList>{children}</CardList>
        </Container>
    );
};

export default List;
