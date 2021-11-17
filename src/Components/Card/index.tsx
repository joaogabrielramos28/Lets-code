import React, { useState } from 'react';
import { Container, Content, Actions, CardHeader } from './styles';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { FaSave } from 'react-icons/fa';
import { BiBlock } from 'react-icons/bi';
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill
} from 'react-icons/bs';
interface CardProps {
    titulo: string;
    conteudo: string;
}

const Card: React.FC<CardProps> = ({ titulo, conteudo }: CardProps) => {
    const [editMode, setEditMode] = useState(false);
    const handleEditCard = () => {
        setEditMode(true);
    };

    const handleDisableEditMode = () => {
        setEditMode(false);
    };

    return (
        <Container>
            {editMode ? (
                <>
                    <Content>
                        <input type="text" value={titulo} />
                        <textarea rows={5} value={conteudo}></textarea>
                    </Content>
                    <Actions>
                        <BiBlock size={30} onClick={handleDisableEditMode} />
                        <p></p>
                        <FaSave size={30} />
                    </Actions>
                </>
            ) : (
                <>
                    <Content>
                        <CardHeader>
                            <h3></h3>
                            <h3>{titulo}</h3>
                            <FiEdit size={25} onClick={handleEditCard} />
                        </CardHeader>
                        <p>{conteudo}</p>
                    </Content>
                    <Actions>
                        <BsFillArrowLeftCircleFill size={30} />
                        <AiFillDelete size={30} />
                        <BsFillArrowRightCircleFill size={30} />
                    </Actions>
                </>
            )}
        </Container>
    );
};

export default Card;
