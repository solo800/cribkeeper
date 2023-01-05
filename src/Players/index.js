import React, { useId } from "react";
import { connect } from "react-redux";

import // updatePlayers,
// addCardToCrib,
// startThePlay
"../redux/app/actions";

// import { removeCardFromPlayerHand, isValidMove } from "../redux/app/fn";

import Hand from "../Hand";

import styles from "./Players.module.css";

function Players(props) {
    const { players, gameHasStarted, crib, creatingCrib } = props;

    // Up to four players
    // const ids = [useId(), useId(), useId(), useId()];

    return players.map(({ name, hand }, i) => {
        // if (gameHasStarted) {
        //     return (
        //         <div key={ids[i]} className={styles.player}>
        //             <span>Name: {name}</span>
        //             <Hand
        //                 hand={hand}
        //                 cardClick={(card) => {

        //                 }}
        //             />
        //         </div>
        //     );
        // }

        return (
            <div key={ids[i]}>
                <span>Name:</span>
                <input type="text" value={name} onChange={({ target }) => {}} />
            </div>
        );
    });
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
