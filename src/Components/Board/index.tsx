import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import List from '../List/index';
import Card from '../Card/index';
import NewCard from '../NewCard/index';
import api from '../../services/api';

interface CardData {
    id: string;
    titulo: string;
    conteudo: string;
    lista: string;
}
const Board: React.FC = () => {
    const [bearerToken, setBearerToken] = useState(() => {
        const token = localStorage.getItem('@letscode:Token');
        if (token) {
            const formattedToken = JSON.parse(token);
            return formattedToken;
        }
        return '';
    });
    const [cardList, setCardList] = useState<CardData[]>([]);
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
    };

    useEffect(() => {
        api.get('/cards', {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        })
            .then((res) => {
                setCardList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [bearerToken]);

    return (
        <Container>
            <List titulo="Novo">
                <NewCard bearerToken={bearerToken} />
            </List>
            <List titulo="To Do">
                {cardList
                    .filter((card) => card.lista == 'ToDo')
                    .map((card) => (
                        <Card
                            key={card.id}
                            titulo={card.titulo}
                            conteudo={card.conteudo}
                            handleDeleteCard={handleDeleteCard}
                            id={card.id}
                            lista={card.lista}
                            handleEditToToDo={handleEditToToDo}
                        />
                    ))}
            </List>
            <List titulo="Doing">
                {cardList
                    .filter((card) => card.lista == 'Doing')
                    .map((card) => (
                        <Card
                            key={card.id}
                            titulo={card.titulo}
                            conteudo={card.conteudo}
                            handleDeleteCard={handleDeleteCard}
                            handleEditToToDo={handleEditToToDo}
                            id={card.id}
                            lista={card.lista}
                        />
                    ))}
            </List>
            <List titulo="Done">
                {cardList
                    .filter((card) => card.lista == 'Done')
                    .map((card) => (
                        <Card
                            key={card.id}
                            titulo={card.titulo}
                            conteudo={card.conteudo}
                            handleDeleteCard={handleDeleteCard}
                            handleEditToToDo={handleEditToToDo}
                            id={card.id}
                            lista={card.lista}
                        />
                    ))}
            </List>
        </Container>
    );
};

export default Board;
