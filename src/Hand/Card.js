import React from "react";
import styles from "./Hand.module.css";
import { SUITS } from "../redux/sagas/fn";

function Card(props) {
    const { card, cardClick } = props;
    const { name, suit, id } = card;

    return (
        <div key={id} className={styles.card} onClick={() => cardClick(card)}>
            <span>{name}</span>
            <span
                className={styles[suit]}
                dangerouslySetInnerHTML={{
                    __html: SUITS[suit]
                }}
            ></span>
        </div>
    );
}

export default Card;
