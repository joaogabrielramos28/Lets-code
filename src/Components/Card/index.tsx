import React from 'react';
import { Container, Content } from './styles';
import { IoIosAddCircle } from 'react-icons/io';
interface CardProps {
    titulo: string;
    conteudo: string;
}

const Card: React.FC<CardProps> = ({ titulo, conteudo }: CardProps) => {
    return (
        <Container>
            <Content>
                <h3>{titulo}</h3>
                <p>{conteudo}</p>
            </Content>
            <IoIosAddCircle size={38} />
        </Container>
    );
};

export default Card;
