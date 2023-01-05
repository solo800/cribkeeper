import { put, select, take, takeEvery } from "redux-saga/effects";
import { UPDATE_GAME_STATE, UPDATE_PLAYERS, DEAL } from "../app/types";
import { setGameState } from "../app/actions";
import {
    SETTING_UP_GAME,
    READY_TO_DEAL,
    CREATING_CRIB
} from "../../App/GAME_STATES";

export function* updateGameState() {
    yield takeEvery([UPDATE_GAME_STATE, UPDATE_PLAYERS, DEAL], worker);
}

function* worker(action) {
    const state = yield select(({ app }) => app);
    const { gameState, numberOfPlayers, players, crib } = state;
    const validPlayerNames = players.reduce((nameCount, { name }) => {
        return name && name.length > 0 ? nameCount + 1 : nameCount;
    }, 0);

    if (
        ((numberOfPlayers === 2 && validPlayerNames === 2) ||
            (numberOfPlayers === 4 && validPlayerNames === 4)) &&
        gameState === SETTING_UP_GAME
    ) {
        // Valid number of players, they have names, current state is setup
        yield put(setGameState(READY_TO_DEAL));
    } else if (
        ((numberOfPlayers === 2 && validPlayerNames === 2) ||
            (numberOfPlayers === 4 && validPlayerNames === 4)) &&
        gameState === READY_TO_DEAL &&
        action.type === DEAL
    ) {
        // Valid number of players, they have names, current state is ready to deal
        yield put(setGameState(CREATING_CRIB));
    } else {
        // Don't know what's going on, revert to initial state
        console.log("else state");
        // yield put(setGameState(SETTING_UP_GAME));
    }
}
