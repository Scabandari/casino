import ActionTypes from '../const/ActionTypes';

const setNumberPlayers = (players)=> {
    return {
        type: ActionTypes.SET_NUMBER_PLAYERS,
        players
    }
};

export default setNumberPlayers;