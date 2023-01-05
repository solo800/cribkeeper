import {
    SET_NUMBER_OF_PLAYERS,
    UPDATE_DECK,
    UPDATE_PLAYERS,
    SET_GAME_STATE
} from "./types";
import { SETTING_UP_GAME } from "../../App/GAME_STATES";

const INITIAL_STATE = {
    deck: [],
    players: [{}, {}],
    numberOfPlayers: 2,
    gameState: SETTING_UP_GAME,
    crib: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NUMBER_OF_PLAYERS:
            const { numberOfPlayers } = action;

            // Update the objects in the players array
            let players = [];
            let playerNum = 0;
            while (playerNum < numberOfPlayers) {
                let newPlayer = {};
                if (state.players[playerNum]) {
                    newPlayer = { ...state.players[playerNum] };
                }
                players.push(newPlayer);
            }

            return {
                ...state,
                numberOfPlayers: action.numberOfPlayers,
                players
            };
        case UPDATE_DECK:
            return { ...state, deck: action.deck };
        case UPDATE_PLAYERS:
            return { ...state, players: action.players };
        case SET_GAME_STATE:
            return { ...state, gameState: action.gameState };
        default:
            return state;
    }
};

export default reducer;
