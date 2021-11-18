import React, { useRef } from 'react';
import { Container, Content, Actions } from './styles';
import api from '../../services/api';
import { IoIosAddCircle } from 'react-icons/io';

interface NewCardProps {
    bearerToken: React.SetStateAction<string>;
}

const NewCard: React.FC<NewCardProps> = ({ bearerToken }: NewCardProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = () => {
        try {
            api.post('/cards', {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                },
                titulo: inputRef.current?.value,
                conteudo: textAreaRef.current?.value,
                lista: 'ToDo'
            });
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <Container>
            <Content>
                <input ref={inputRef} type="text" />
                <textarea ref={textAreaRef} rows={5}></textarea>
            </Content>
            <Actions>
                <IoIosAddCircle size={38} onClick={handleSubmit} />
            </Actions>
        </Container>
    );
};

export default NewCard;
