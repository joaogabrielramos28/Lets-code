import React from 'react';
import { Container, Content, Actions } from './styles';
import { IoIosAddCircle } from 'react-icons/io';
const NewCard: React.FC = () => {
    return (
        <Container>
            <Content>
                <input type="text" />
                <textarea rows={5}></textarea>
            </Content>
            <Actions>
                <IoIosAddCircle size={38} />
            </Actions>
        </Container>
    );
};

export default NewCard;
