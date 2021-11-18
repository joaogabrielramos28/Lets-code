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
    const [bearerToken, setBearerToken] = useState('');
    const [cardList, setCardList] = useState<CardData[]>([]);
    useEffect(() => {
        api.post('/login', {
            login: 'letscode',
            senha: 'lets@123'
        }).then((response) => {
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
                        />
                    ))}
            </List>
            {/* <List titulo="Doing" />
            <List titulo="Done" /> */}
        </Container>
    );
};

export default Board;
