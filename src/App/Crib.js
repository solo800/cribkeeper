import React from "react";
import Card from "../Hand/Card";
import styles from "../Hand/Hand.module.css";

function Crib(props) {
    return (
        <div className={styles.hand}>
            {props.cards.map((card) => {
                return <Card key={card.id} card={card} cardClick={() => {}} />;
            })}
        </div>
    );
}

export default Crib;
