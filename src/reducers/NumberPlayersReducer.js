import ActionTypes from '../const/ActionTypes';

const initialState = {
    number_players: 8
};

export default (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_NUMBER_PLAYERS:
            return Object.assign({}, state, {
               number_players: action.number_players || state.number_players,
            });
        default:
            return state;
    }
};