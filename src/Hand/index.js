import React from "react";
import styles from "./Hand.module.css";
import { SUITS } from "../redux/sagas/fn";

import Card from "./Card";

function Hand({ hand, cardClick }) {
    return (
        <div className={styles.hand}>
            {hand.map((card) => (
                <Card key={card.id} card={card} cardClick={cardClick} />
            ))}
        </div>
    );
}

export default Hand;
