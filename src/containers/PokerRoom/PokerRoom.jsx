import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Table';
import { setGameMode, setGameStage } from '../../actions';
import { POT_COUNT } from '../../const/GameModes';
import {HAND_RESULT, PRE_DEAL, PRE_FLOP, PRE_RIVER, PRE_TURN} from "../../const/GameStages";


class PokerRoom extends Component {

    // TODO this is just an example to make sure redux is working. The user should set this
    componentDidMount() {
        console.log(`Action should fire`);
        // TODO this is not where actions should be called. Just for testing
        this.props.setGameMode(POT_COUNT);
        //console.log(`game_mode.game: ${JSON.stringify(this.props.game_mode.game)}`);
    }

    nextGameStage = () => {
        const { stage } = this.props.game_stage;  // TODO combine into one?
        const { setGameStage } = this.props;

        let next_stage;
        if(stage === PRE_DEAL) {
            next_stage = PRE_FLOP;
        } else if(stage === PRE_FLOP) {
            next_stage = PRE_TURN;
        } else if(stage === PRE_TURN) {
            next_stage = PRE_RIVER;
        } else if(stage === PRE_RIVER) {
            next_stage = HAND_RESULT;
        } else {
            next_stage = PRE_DEAL;
        }
        setGameStage(next_stage);
        //console.log(`stage: ${stage}`);
    };

    changeGameStage = () => {
        // setTimeout(this.props.setGameStage(PRE_FLOP), 3000);
        // setTimeout(this.props.setGameStage(PRE_TURN), 6000);
        // setTimeout(this.props.setGameStage(PRE_RIVER), 9000);
        // setTimeout(this.props.setGameStage(HAND_RESULT), 12000);
        // setTimeout(this.props.setGameStage(PRE_FLOP), 15000);
    };

    // TODO I'd like to dynamically set the table size based on screen size
    render() {
        //this.nextGameStage();

        const { game_stage: { stage }, game_mode: { mode } } = this.props;
        console.log(`this.props: ${JSON.stringify(this.props)}`);
        console.log(`stage: ${stage}`);

        return <Table
            table_height={55}
            table_width={50}
            game_mode={mode}
            game_stage={stage}
            handleNextGameStage={this.nextGameStage}

        />;
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setGameMode,
    setGameStage,
};


export default connect(mapStateToProps, mapDispatchToProps)(PokerRoom);