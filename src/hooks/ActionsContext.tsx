import React, { createContext, useState, useEffect, useContext } from 'react';
import { useFetch } from './useFetch';
import api from '../services/api';
interface CardData {
    id: string;
    titulo?: string;
    conteudo?: string;
    lista: string;
}

interface ActionsContextData {
    data: CardData[];
    handleDeleteCard(id: string): void;
    handleEditToToDo(
        id: string,
        titulo: string,
        conteudo: string,
        lista: string
    ): void;
    handleCreateCard(
        inputRef: React.RefObject<HTMLInputElement>,
        textAreaRef: React.RefObject<HTMLTextAreaElement>
    ): void;
    handleUpdateCardContent(
        id: string,
        lista: string,
        inputRef: React.RefObject<HTMLInputElement>,
        textAreaRef: React.RefObject<HTMLTextAreaElement>
    ): void;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    editMode: boolean;
}
const ActionsContext: any = createContext({});

const ActionsProvider: React.FC = ({ children }) => {
    const [editMode, setEditMode] = useState(false);
    const [bearerToken, setBearerToken] = useState(() => {
        const token = localStorage.getItem('@letscode:Token');
        if (token) {
            const formattedToken = JSON.parse(token);
            return formattedToken;
        }
        return '';
    });
    const { data, mutate } = useFetch<CardData[]>(`cards`);

    useEffect(() => {
        api.post('/login', {
            login: 'letscode',
            senha: 'lets@123'
        }).then((response) => {
            const token = JSON.stringify(response.data);
            localStorage.setItem('@letscode:Token', token);
            setBearerToken(response.data);
        });
    }, []);

    const handleDeleteCard = (id: string): void => {
        api.delete(`/cards/${id}`, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });

        const newCardList = data
            ?.filter((card) => card.id != id)
            .map((card) => {
                return card;
            });
        mutate(newCardList, false);
    };
    const handleEditToToDo = (
        id: string,
        titulo: string,
        conteudo: string,
        lista: string
    ): void => {
        api.put(`/cards/${id}`, {
            id: id,
            titulo: titulo,
            conteudo: conteudo,
            lista: lista
        });

        const newCardList = data?.map((card) => {
            if (card.id === id) {
                return { ...card, lista: lista };
            }

            return card;
        });

        mutate(newCardList, false);
    };

    const handleCreateCard = (
        inputRef: React.RefObject<HTMLInputElement>,
        textAreaRef: React.RefObject<HTMLTextAreaElement>
    ) => {
        api.post('/cards', {
            titulo: inputRef.current?.value,
            conteudo: textAreaRef.current?.value,
            lista: 'ToDo'
        });
        const newCard = {
            id: '123',
            titulo: inputRef.current?.value,
            conteudo: textAreaRef.current?.value,
            lista: 'ToDo'
        };
        const newList = [];
        data?.map((card) => {
            newList.push(card);
        });

        newList.push(newCard);

        mutate(newList, false);
    };

    const handleUpdateCardContent = (
        id: string,
        lista: string,
        inputRef: React.RefObject<HTMLInputElement>,
        textAreaRef: React.RefObject<HTMLTextAreaElement>
    ): void => {
        api.put(`/cards/${id}`, {
            id: id,
            titulo: inputRef.current?.value,
            conteudo: textAreaRef.current?.value,
            lista: lista
        });

        const newCardList = data?.map((card) => {
            if (card.id === id) {
                return {
                    ...card,
                    titulo: inputRef.current?.value,
                    conteudo: textAreaRef.current?.value,
                    lista: lista
                };
            }
            return card;
        });

        mutate(newCardList, false);
        setEditMode(false);
    };
    return (
        <ActionsContext.Provider
            value={{
                data,
                handleDeleteCard,
                handleEditToToDo,
                handleCreateCard,
                handleUpdateCardContent,
                setEditMode,
                editMode
            }}
        >
            {children}
        </ActionsContext.Provider>
    );
};

function useActions(): ActionsContextData {
    const context: any = useContext(ActionsContext);

    if (!context) {
        throw new Error('UseAuth must be used within a AuthProvider');
    }

    return context;
}

export { ActionsContext, ActionsProvider, useActions };
