import ActionTypes from '../const/ActionTypes';

const setNumberPlayers = (number_players)=> {
    return {
        type: ActionTypes.SET_NUMBER_PLAYERS,
        number_players
    }
};

export default setNumberPlayers;