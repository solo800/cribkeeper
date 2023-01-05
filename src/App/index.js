import React from "react";
// import styles from "./App.module.css";
import GameSetup from "../GameSetup";
import { CREATING_CRIB, READY_TO_DEAL, SETTING_UP_GAME } from "./GAME_STATES";

import { connect } from "react-redux";

function App(props) {
    return (
        <div>
            {[SETTING_UP_GAME, READY_TO_DEAL].includes(props.gameState) && (
                <GameSetup />
            )}
            {CREATING_CRIB === props.gameState && (
                <h1>Time to show joes and their hands</h1>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { gameState: state.app.gameState, players: state.app.players };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
