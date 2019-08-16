import ActionTypes from '../const/ActionTypes';

const setBlinds =  ({big_blind, small_blind}) => {
    return {
        type: ActionTypes.SET_BLINDS,
        big_blind,
        small_blind,
    }
};

export default setBlinds;