import React, { useId } from "react";
import { connect } from "react-redux";

import styles from "./GameSetup.module.css";

import { READY_TO_DEAL } from "../App/GAME_STATES";
import { setNumberOfPlayers, deal, updatePlayers } from "../redux/app/actions";

import PlayerName from "./PlayerName";

function GameSetup(props) {
    const {
        gameState,
        numberOfPlayers,
        players,
        setNumberOfPlayers,
        deal,
        updatePlayers
    } = props;

    return (
        <div className={styles.playerSelectorContainer}>
            <span>How many players?</span>
            <div>
                <span>#</span>
                <input
                    type="number"
                    value={numberOfPlayers}
                    onChange={({ target }) => {
                        setNumberOfPlayers(parseInt(target.value));
                    }}
                />
            </div>
            <div className={styles.players}>
                {players.map((player, i) => (
                    <PlayerName
                        key={useId()}
                        players={players}
                        player={player}
                        playerIndex={i}
                        updatePlayers={updatePlayers}
                    />
                ))}
            </div>
            <button disabled={!(gameState === READY_TO_DEAL)} onClick={deal}>
                Deal
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        gameState: state.app.gameState,
        numberOfPlayers: state.app.numberOfPlayers,
        players: state.app.players
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setNumberOfPlayers: (numberOfPlayers) =>
            dispatch(setNumberOfPlayers(numberOfPlayers)),
        deal: (arg) => dispatch(deal(arg)),
        updatePlayers: (players) => dispatch(updatePlayers(players))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameSetup);
