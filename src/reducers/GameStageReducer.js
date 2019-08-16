import { PRE_DEAL } from '../const/GameStages';
import ActionTypes from '../const/ActionTypes';

const initialState = {
  stage: PRE_DEAL,
};

export default (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_GAME_STAGE: {
            return {...state, stage: action.stage};
        }
        default:
            return state;
    }
}


