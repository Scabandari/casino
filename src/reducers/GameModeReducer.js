import ActionTypes from '../const/ActionTypes';
import { POT_COUNT }  from '../const/GameModes';


const initialState = {
  mode: POT_COUNT,
};

export default (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_GAME_MODE: {
            return Object.assign({}, state, {
                mode: action.mode || state.mode,
            });
        }
        default:
            return state;
    }
}

