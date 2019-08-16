import ActionTypes from '../const/ActionTypes';

const initialState = {
    players: 8
};

export default (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_NUMBER_PLAYERS:
            return Object.assign({}, state, {
               players: action.players || state.players,
            });
        default:
            return state;
    }
};