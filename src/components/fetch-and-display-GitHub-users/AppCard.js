import React from 'react';

import { CardList } from "./CardList";
import { Form } from "./Form";

const { useState } = React;

export const AppCard = () => {
    const [cards, setCards] = useState([]);

    const addNewCard = cardInfo => setCards(cards.concat(cardInfo));

    return (
        <div>
            <Form onSubmit={addNewCard} />
            <CardList cards={cards}/>
        </div>
    )
};