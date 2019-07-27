import ActionTypes from '../const/ActionTypes';
import { POT_COUNT }  from '../const/GameModes';


const initialState = {
  game: POT_COUNT,
};

export default function(state=initialState, action) {
    switch(action.type) {
        case ActionTypes.SET_GAME_MODE: {
            return Object.assign({}, state, {
               game: action.game || initialState.game,
            });
        }
        default:
            return state;
    }
}

