import React, { useRef } from 'react';
import { Container, Content, Actions } from './styles';
import { IoIosAddCircle } from 'react-icons/io';
interface NewCardProps {
    handleCreateCard(
        inputRef: React.RefObject<HTMLInputElement>,
        textAreaRef: React.RefObject<HTMLTextAreaElement>
    ): void;
}

const NewCard: React.FC<NewCardProps> = ({
    handleCreateCard
}: NewCardProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    return (
        <Container>
            <Content>
                <input ref={inputRef} type="text" />
                <textarea ref={textAreaRef} rows={5}></textarea>
            </Content>
            <Actions>
                <IoIosAddCircle
                    size={38}
                    onClick={() => handleCreateCard(inputRef, textAreaRef)}
                />
            </Actions>
        </Container>
    );
};

export default NewCard;
