import React from 'react';
import { Container } from './styles';
import List from '../List/index';
import Card from '../Card/index';
import NewCard from '../NewCard/index';
import { useActions } from '../../hooks/ActionsContext';
const Board: React.FC = () => {
    const { data, handleCreateCard } = useActions();
    return (
        <Container>
            <List titulo="Novo">
                <NewCard handleCreateCard={handleCreateCard} />
            </List>
            <List titulo="To Do">
                {data
                    ?.filter((card) => card.lista == 'ToDo')
                    .map((card) => (
                        <Card
                            key={card.id}
                            titulo={card.titulo || ''}
                            conteudo={card.conteudo || ''}
                            id={card.id}
                            lista={card.lista}
                        />
                    ))}
            </List>
            <List titulo="Doing">
                {data
                    ?.filter((card) => card.lista == 'Doing')
                    .map((card) => (
                        <Card
                            key={card.id}
                            titulo={card.titulo || ''}
                            conteudo={card.conteudo || ''}
                            id={card.id}
                            lista={card.lista}
                        />
                    ))}
            </List>
            <List titulo="Done">
                {data
                    ?.filter((card) => card.lista == 'Done')
                    .map((card) => (
                        <Card
                            key={card.id}
                            titulo={card.titulo || ''}
                            conteudo={card.conteudo || ''}
                            id={card.id}
                            lista={card.lista}
                        />
                    ))}
            </List>
        </Container>
    );
};

export default Board;
