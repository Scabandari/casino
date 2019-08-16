import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PokerTable, ControlForm } from '../../components/index';
import { setGameMode, setGameStage, setNumberPlayers } from '../../actions';
import { POT_COUNT } from '../../const/GameModes';
import {HAND_RESULT, PRE_DEAL, PRE_FLOP, PRE_RIVER, PRE_TURN} from "../../const/GameStages";
import table_positions from '../../components/const/tablePositions';
import Card from "../../components/Card/Card";
import Table from "../../components/Table/index";
import deck from '../../components/const/deck';


class GameRoom extends Component {

    //table_height = 55;
    //table_width= 50;
    state = {
        table_height: 55,
        table_width: 50,
        deck_data: {
            card_data: deck.deck,
            height: 6,
            width: 2.5,
            show_card: false,
            card_visible: true,
            card_styles: {
                position: 'absolute',
                top: `${55/table_positions['deck_position'].offset_top_divisor}vh`,
                left: `${50/table_positions['deck_position'].offset_left_divisor}vw`,
                border: '2px solid red',
            },
        },
        flop_data: {
            card1: deck.three_clubs,
            card2: deck.three_diamonds,
            card3: deck.two_clubs,
            card_height: 6,
            card_width: 2.5,
            table_position: table_positions.flop,
            table_height: 55,
            table_width: 50,
            show_cards: true,
            flop_visible: true,
        },
        turn_data: {
            card_data: deck.three_diamonds,
            height: 6,
            width: 2.5,
            show_card: true,
            card_visible: true,
            card_styles: {
                position: 'absolute',
                top: `${55/table_positions['turn'].offset_top_divisor}vh`,
                left: `${50/table_positions['turn'].offset_left_divisor}vw`,
            },
        },
        river_data: {
            card_data: deck.two_hearts,
            height: 6,
            width: 2.5,
            show_card: true,
            card_visible: true,
            card_styles: {
                position: 'absolute',
                top: `${55/table_positions['river'].offset_top_divisor}vh`,
                left: `${50/table_positions['river'].offset_left_divisor}vw`,
            },
        }
    };

    styles = {
        form_container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
    };
    // TODO this is just an example to make sure redux is working. The user should set this
    componentDidMount() {
        //console.log(`Action should fire`);
        // TODO this is not where actions should be called. Just for testing
        //this.props.setGameMode(POT_COUNT);
        //console.log(`props: ${JSON.stringify(this.props)}`);
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
    };
    
    handleNumberPlayersAction = (num_players) => {
        console.log(`handleNumberPlayersAction called`);
        this.props.setNumberPlayers(num_players);
    };

    handleGameModeAction = (game_mode) => {
        this.props.setGameMode(game_mode);
    };
    
    // TODO I'd like to dynamically set the table size, card size & location? based on screen size
    render() {
        const {
            game_stage: { stage },
            game_mode: { mode },
            number_players
        } = this.props;

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
                <PokerTable
                    table_height={55}
                    table_width={50}
                    game_mode={mode}
                    game_stage={stage}
                    handleNextGameStage={this.nextGameStage}
                    deck_data={this.state.deck_data}
                    flop_data={this.state.flop_data}
                    turn_data={this.state.turn_data}
                    river_data={this.state.river_data}
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


export default connect(mapStateToProps, mapDispatchToProps)(GameRoom);