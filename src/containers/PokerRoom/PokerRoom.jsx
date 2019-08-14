import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Table from '../../components/Table';
import { Table, ControlForm } from '../../components/';
import { setGameMode, setGameStage, setNumberPlayers } from '../../actions';
import { POT_COUNT } from '../../const/GameModes';
import {HAND_RESULT, PRE_DEAL, PRE_FLOP, PRE_RIVER, PRE_TURN} from "../../const/GameStages";
//import ActionTypes from '../../const/ActionTypes';


class PokerRoom extends Component {

    styles = {
        form_container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
    };
    // TODO this is just an example to make sure redux is working. The user should set this
    componentDidMount() {
        console.log(`Action should fire`);
        // TODO this is not where actions should be called. Just for testing
        this.props.setGameMode(POT_COUNT);
        console.log(`props: ${JSON.stringify(this.props)}`);
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
            default:
                next_stage = PRE_DEAL;
        }
        setGameStage(next_stage);
        //console.log(`stage: ${stage}`);
    };

    // handleSetNumberPlayers = (num_players) => {
    //
    // };
    handleNumberPlayersAction = (num_players) => {
        console.log(`handleNumberPlayersAction called`);
        this.props.setNumberPlayers(num_players);
    };

    handleGameModeAction = (game_mode) => {
        this.props.setGameMode(game_mode);
    };



    // TODO I'd like to dynamically set the table size, card size & location? based on screen size
    render() {
        //this.nextGameStage();

        const {
            game_stage: { stage },
            game_mode: { mode },
            number_players
        } = this.props;
        // console.log(`this.props: ${JSON.stringify(this.props)}`);
        // console.log(`stage: ${stage}`);
        const actions = {
            game_mode: {
                name: 'game_mode',
                action: this.handleGameModeAction,
            },
            number_players: {
                name: 'number_players',
                action: this.handleNumberPlayersAction,
            }
        };

        return (
            <div>
                <div style={this.styles.form_container}>
                    <div style={{marginLeft: '20vmin'}}>
                        <ControlForm
                            thing={'thing'}
                            gameType={[{name: "Pot Count", value: POT_COUNT}]}
                            actions={actions}
                        />
                    </div>
                </div>
                <Table
                    table_height={55}
                    table_width={50}
                    game_mode={mode}
                    game_stage={stage}
                    handleNextGameStage={this.nextGameStage}

                />;
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setGameMode,
    setGameStage,
    setNumberPlayers,
};


export default connect(mapStateToProps, mapDispatchToProps)(PokerRoom);