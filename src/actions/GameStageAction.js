import ActionTypes from '../const/ActionTypes';

const setGameStage = (stage) => {
    return {
        type: ActionTypes.SET_GAME_STAGE,
        stage,
    }
};

export default setGameStage;