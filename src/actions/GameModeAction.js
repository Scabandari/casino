import ActionTypes from '../const/ActionTypes';

const setGameMode = (game_mode) => {
    return {
        type: ActionTypes.SET_GAME_MODE,
        game_mode,
    }
};

export default setGameMode;
