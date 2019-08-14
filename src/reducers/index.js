import { combineReducers } from 'redux';
import GameModeReducer from './GameModeReducer';
import GameStageReducer from './GameStageReducer';
import NumberPlayersReducer from './NumberPlayersReducer';

export default combineReducers({
    game_mode: GameModeReducer,
    game_stage: GameStageReducer,
    number_players: NumberPlayersReducer,
});