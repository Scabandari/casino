import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PokerTable, ControlForm } from '../../components/index';
import { setGameMode, setGameStage, setNumberPlayers, setBlinds } from '../../actions';
import { POT_COUNT } from '../../const/GameModes';
import {HAND_RESULT, PRE_DEAL, PRE_FLOP, PRE_RIVER, PRE_TURN} from "../../const/GameStages";
import table_positions from '../../components/const/tablePositions';
import Card from "../../components/Card/Card";
import deck from '../../components/const/deck';
import Hand from "../../components/Hand";


class GameRoom extends Component {

    //table_height = 55;
    //table_width= 50;
    state = {
        table_height: 55,
        table_width: 50,
        card_height: 6,
        card_width: 2.5,
        deck: {
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
        flop: {
            card1: deck.three_clubs,
            card2: deck.three_diamonds,
            card3: deck.two_clubs,
            card_height: 6,
            card_width: 2.5,
            table_position: table_positions.flop,
            table_height: 55,
            table_width: 50,
            show_cards: true,
        },
        turn: {
            card_data: deck.three_diamonds,
            height: 6,
            width: 2.5,
            show_card: true,
            card_styles: {
                position: 'absolute',
                top: `${55/table_positions['turn'].offset_top_divisor}vh`,
                left: `${50/table_positions['turn'].offset_left_divisor}vw`,
            },
        },
        river: {
            card_data: deck.two_hearts,
            height: 6,
            width: 2.5,
            show_card: true,
            card_styles: {
                position: 'absolute',
                top: `${55/table_positions['river'].offset_top_divisor}vh`,
                left: `${50/table_positions['river'].offset_left_divisor}vw`,
            },
        },
        hands: {
            human: [
                {
                    id: 1,
                    card1: deck.two_clubs,
                    card2: deck.two_diamonds,
                    table_position: table_positions.south,
                    show_cards: true,
                    card1_visible: true,
                    card2_visible: true,
                }
            ],
            ai: [  // an array of 8 players. Only make visible the number of players
                {
                    id: 2,
                    card1: deck.two_clubs,
                    card2: deck.two_diamonds,
                    table_position: table_positions.north,
                    show_cards: false,
                    card1_visible: true,
                    card2_visible: true,
                },
                {
                    id: 3,
                    card1: deck.two_clubs,
                    card2: deck.two_diamonds,
                    table_position: table_positions.east,
                    show_cards: false,
                    card1_visible: true,
                    card2_visible: true,
                },
                {
                    id: 4,
                    card1: deck.two_clubs,
                    card2: deck.two_diamonds,
                    table_position: table_positions.west,
                    show_cards: false,
                    card1_visible: true,
                    card2_visible: true,
                },
                {
                    id: 5,
                    card1: deck.two_clubs,
                    card2: deck.two_diamonds,
                    table_position: table_positions.north_east,
                    show_cards: false,
                    card1_visible: true,
                    card2_visible: true,
                },
                {
                    id: 6,
                    card1: deck.two_clubs,
                    card2: deck.two_diamonds,
                    table_position: table_positions.south_west,
                    show_cards: false,
                    card1_visible: true,
                    card2_visible: true,
                },
                {
                    id: 7,
                    card1: deck.two_clubs,
                    card2: deck.two_diamonds,
                    table_position: table_positions.south_east,
                    show_cards: false,
                    card1_visible: true,
                    card2_visible: true,
                },
                {
                    id: 8,
                    card1: deck.two_clubs,
                    card2: deck.two_diamonds,
                    table_position: table_positions.north_west,
                    show_cards: false,
                    card1_visible: true,
                    card2_visible: true,
                },
            ]
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
        const { setGameStage, game_stage: {stage} } = this.props;

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
        // const { number_players } = this.props;
        // console.log(`new number of players: ${num_players}`);
        //this.makeHandsVisible(number_players);
    };

    handleGameModeAction = (game_mode) => {
        this.props.setGameMode(game_mode);
    };

    handleBlindsAction = ({big_blind, small_blind}) => {
      this.props.setBlinds({big_blind, small_blind});
    };

    updateBoard = (game_stage) => {
        let show_flop, show_turn, show_river;
        switch (game_stage) {
            case PRE_TURN:
                show_flop = true ;
                show_turn = false ;
                show_river = false ;
                break;
            case PRE_RIVER:
                show_flop = true;
                show_turn = true ;
                show_river = false ;
                break;
            case HAND_RESULT:
                show_flop = true;
                show_turn = true ;
                show_river = true ;
                break;

            default:
                show_flop  = false ;
                show_turn  = false ;
                show_river  = false ;
        }
        return { show_flop, show_turn, show_river };
    };

    // TODO I'd like to dynamically set the table size, card size & location? based on screen size
    render() {
        const {
            game_stage: { stage },
            game_mode: { mode },
            number_players,
            blinds,   //: { big_blind,  small_blind}
        } = this.props;
        console.log(`number_players: ${JSON.stringify(number_players.players)}`);

        const actions = {
            set_game_mode: {
                name: 'game_mode',
                action: this.handleGameModeAction,
            },
            set_number_players: {
                name: 'number_players',
                action: this.handleNumberPlayersAction,
            },
            set_blinds: {
                name: 'blinds',
                action: this.handleBlindsAction,
            }
        };

        const { show_flop, show_turn, show_river } = this.updateBoard(stage);
        const {
            hands,
            table_height,
            table_width,
            card_height,
            card_width,
            deck,
            flop,
            turn,
            river
        } = this.state;

        return (
            <div>
                <div style={this.styles.form_container}>
                    <div style={{marginLeft: '20vmin'}}>
                        <ControlForm
                            thing={'thing'}
                            all_game_modes={[{name: "Pot Count", value: POT_COUNT}]}
                            current_game_mode={mode}
                            number_players={number_players}
                            actions={actions}
                            blinds={blinds}
                        />
                    </div>
                </div>
                <PokerTable
                    table_height={table_height}
                    table_width={table_width}
                    card_height={card_height}
                    card_width={card_width}
                    game_mode={mode}
                    game_stage={stage}
                    handleNextGameStage={this.nextGameStage}
                    deck={deck}
                    flop={flop}
                    turn={turn}
                    river={river}
                    show_flop={show_flop}
                    show_turn={show_turn}
                    show_river={show_river}
                    hands={hands.human.concat(hands.ai).slice(0, number_players.players)}

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
    setBlinds,
};


export default connect(mapStateToProps, mapDispatchToProps)(GameRoom);