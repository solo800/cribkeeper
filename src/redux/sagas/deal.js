import { put, take, select } from "redux-saga/effects";
import { DEAL } from "../app/types";
import { updateDeck, updatePlayers } from "../app/actions";
import { createDeck, dealDeck } from "./fn";

export function* deal() {
    yield take(DEAL);
    const numberOfPlayers = yield select((state) => state.app.numberOfPlayers);

    if (numberOfPlayers === 2 || numberOfPlayers === 4) {
        const initialPlayers = [];
        let player = 0;
        while (player < numberOfPlayers) {
            initialPlayers.push({ name: "" });
            player++;
        }

        const [deck, players] = dealDeck(createDeck(), initialPlayers);
        yield put(updateDeck(deck));
        yield put(updatePlayers(players));
    }
}
