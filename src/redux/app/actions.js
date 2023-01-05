import {
    SET_NUMBER_OF_PLAYERS,
    DEAL,
    UPDATE_DECK,
    UPDATE_PLAYERS,
    UPDATE_GAME_STATE,
    SET_GAME_STATE
} from "./types";

const deal = () => {
    return { type: DEAL };
};

const setNumberOfPlayers = (numberOfPlayers) => {
    return { type: SET_NUMBER_OF_PLAYERS, numberOfPlayers };
};

const updateDeck = (deck) => {
    return { type: UPDATE_DECK, deck };
};

const updatePlayers = (players) => {
    return { type: UPDATE_PLAYERS, players };
};

const updateGameState = () => {
    return { type: UPDATE_GAME_STATE };
};

const setGameState = (gameState) => {
    return { type: SET_GAME_STATE, gameState };
};

export {
    setNumberOfPlayers,
    deal,
    updateDeck,
    updatePlayers,
    updateGameState,
    setGameState
};
