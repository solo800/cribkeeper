const SUITS = {
    spades: "&spades;",
    clubs: "&clubs;",
    diamonds: "&diams;",
    hearts: "&hearts;"
};

function getCardValue(cardNumber) {
    switch (cardNumber) {
        case 10:
        case 11:
        case 12:
            return 10;
        default:
            return cardNumber + 1;
    }
}

function getCardName(cardNumber) {
    switch (cardNumber) {
        case 0:
            return "Ace";
        case 10:
            return "Jack";
        case 11:
            return "Queen";
        case 12:
            return "King";
        default:
            return cardNumber + 1;
    }
}

function createDeck() {
    return ["spades", "clubs", "diamonds", "hearts"].reduce((deck, suit) => {
        let cardNumber = 0;
        while (cardNumber < 13) {
            deck.push({
                value: getCardValue(cardNumber),
                name: getCardName(cardNumber),
                suit
            });
            ++cardNumber;
        }

        return deck;
    }, []);
}

function shuffle(deck) {
    return deck.sort((p, n) => {
        return Math.random() < 0.5 ? 1 : -1;
    });
}

function dealDeck(deck, players) {
    const handSize = players.length === 2 ? 6 : 5;
    const shuffledDeck = shuffle(deck);
    const playersDealtHands = players.map((player) => {
        return {
            ...player,
            // Hands are sized
            hand: shuffledDeck.splice(0, handSize)
        };
    });

    return [shuffledDeck, playersDealtHands];
}

function removeCardFromPlayerHand(players, card) {
    let removedCard;
    const newPlayers = players.map((player) => {
        let newHand = [...player.hand];

        newHand = player.hand.filter((playerCard) => {
            if (card.id === playerCard.id) {
                removedCard = card;
                return false;
            }

            return true;
        });

        return { ...player, hand: newHand };
    });

    return [newPlayers, removedCard];
}

function isValidMove(players, card, creatingCrib) {
    let playerPlayingCard;
    players.forEach((player, playerInd) => {
        player.hand.forEach((playerCard, cardInd) => {
            if (card.id === playerCard.id) {
                playerPlayingCard = playerInd;
            }
        });
    });

    if (players.length === 2) {
        if (creatingCrib && players[playerPlayingCard].hand.length > 4) {
            return true;
        }
    }

    return false;
}

export { SUITS, createDeck, dealDeck, removeCardFromPlayerHand, isValidMove };
