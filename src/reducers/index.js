import { combineReducers } from 'redux';
import GameModeReducer from './GameModeReducer';
import GameStageReducer from './GameStageReducer';

export default combineReducers({
    game_mode: GameModeReducer,
    game_stage: GameStageReducer,
});