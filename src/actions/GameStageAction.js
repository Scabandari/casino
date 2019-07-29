import ActionTypes from '../const/ActionTypes';

const setGameStage = (game_stage) => {
    return {
        type: ActionTypes.SET_GAME_STAGE,
        payload: game_stage,
    }
};

export default setGameStage;