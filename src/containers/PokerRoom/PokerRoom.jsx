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
        switch (stage) {
            case PRE_DEAL:
                next_stage = PRE_FLOP;
                break;
            case PRE_FLOP:
                next_stage = PRE_TURN;
                break;
            case PRE_TURN:
                next_stage = PRE_RIVER;
                break;
            case PRE_RIVER:
                next_stage = HAND_RESULT;
                break;
            case PRE_DEAL:
                next_stage = PRE_FLOP;
                break;
            default:
                next_stage = PRE_DEAL;
        }
        setGameStage(next_stage);
        //console.log(`stage: ${stage}`);
    };



    // TODO I'd like to dynamically set the table size, card size & location? based on screen size
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