import React from 'react';
import { Container } from './styles';

interface ListProps {
    titulo: string;
}

const List: React.FC<ListProps> = ({ titulo }: ListProps) => {
    return (
        <Container>
            <h2>{titulo}</h2>
        </Container>
    );
};

export default List;
