import { combineReducers } from 'redux';
import GameModeReducer from './GameModeReducer';

export default combineReducers({
    game_mode: GameModeReducer,
});