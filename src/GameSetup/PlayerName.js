import React from "react";

function PlayerName(props) {
    const { players, player, playerIndex, updatePlayers } = props;
    return (
        <div>
            <span>Name:</span>
            <input
                type="text"
                value={player.name ? player.name : ""}
                onChange={({ target }) => {
                    updatePlayers(
                        [...players].map((curPlayer, i) => {
                            if (i === playerIndex) {
                                return {
                                    ...curPlayer,
                                    name: target.value
                                };
                            }

                            return { ...curPlayer };
                        })
                    );
                }}
            />
        </div>
    );
}

export default PlayerName;
