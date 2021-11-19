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
    handleDeleteCard(id: string): void;
    id: string;
    lista: string;
    handleEditToToDo(
        id: string,
        titulo: string,
        conteudo: string,
        lista: string
    ): void;
}

const Card: React.FC<CardProps> = ({
    titulo,
    conteudo,
    handleDeleteCard,
    handleEditToToDo,
    id,
    lista
}: CardProps) => {
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
                        <BsFillArrowLeftCircleFill
                            size={30}
                            onClick={
                                lista === 'Doing'
                                    ? () =>
                                          handleEditToToDo(
                                              id,
                                              titulo,
                                              conteudo,
                                              'ToDo'
                                          )
                                    : lista === 'Done'
                                    ? () =>
                                          handleEditToToDo(
                                              id,
                                              titulo,
                                              conteudo,
                                              'Doing'
                                          )
                                    : () =>
                                          handleEditToToDo(
                                              id,
                                              titulo,
                                              conteudo,
                                              'ToDo'
                                          )
                            }
                        />
                        <AiFillDelete
                            size={30}
                            onClick={() => handleDeleteCard(id)}
                        />
                        <BsFillArrowRightCircleFill
                            size={30}
                            onClick={
                                lista === 'ToDo'
                                    ? () =>
                                          handleEditToToDo(
                                              id,
                                              titulo,
                                              conteudo,
                                              'Doing'
                                          )
                                    : lista === 'Doing'
                                    ? () =>
                                          handleEditToToDo(
                                              id,
                                              titulo,
                                              conteudo,
                                              'Done'
                                          )
                                    : () =>
                                          handleEditToToDo(
                                              id,
                                              titulo,
                                              conteudo,
                                              'Done'
                                          )
                            }
                        />
                    </Actions>
                </>
            )}
        </Container>
    );
};

export default Card;
