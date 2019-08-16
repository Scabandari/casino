import ActionTypes from '../const/ActionTypes';

const initialState = {
    big_blind: 2,
    small_blind: 1,
};

export default (state=initialState, { type, big_blind, small_blind }) => {
    //const { type, big_blind, small_blind } = action;
    switch (type) {
        case ActionTypes.SET_BLINDS:
            return {...state, big_blind, small_blind};
        default:
            return state;
    }
}