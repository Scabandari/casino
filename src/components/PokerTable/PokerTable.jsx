import React from 'react';
import table from './table.png';
import Hand from '../Hand';
// import table_positions from '../const/tablePositions';
// import { PRE_DEAL, PRE_FLOP, PRE_TURN, PRE_RIVER, HAND_RESULT} from '../../const/GameStages';
import Card from "../Card/Card";
import Flop from '../Flop';


// TODO pass table_positions in as props so this functional component is pure?
const PokerTable = (props) => {

    // const {
    //     deck_position,
    //     flop,
    //     turn,
    //     river,
    //     east,
    //     south,
    //     west,
    //     north,
    //     north_east,
    //     south_east,
    //     north_west,
    //     south_west,
    // } = table_positions;

    const {
        table_height,
        table_width,
        game_mode,
        game_stage,
        handleNextGameStage,
        deck_data,
        flop_data,
        turn_data,
        river_data,
    } = props;

    // const deck_top_offset = table_height/deck_position.offset_top_divisor;
    // const deck_left_offset = table_width/deck_position.offset_left_divisor;
    // const turn_top_offset = table_height/turn.offset_top_divisor;
    // const turn_left_offset = table_width/turn.offset_left_divisor;
    // const river_top_offset = table_height/river.offset_top_divisor;
    // const river_left_offset = table_width/river.offset_left_divisor;

    const styles = {
        table: {
            height: `${table_height}vh`,
            width: `${table_width}vw`,
            //position: 'fixed',
            transform: 'translate(45%, 10%)',
            //border: 'blue solid 2px',
        },
        // deck: {
        //     position: 'absolute',
        //     top: `${deck_top_offset}vh`,
        //     left: `${deck_left_offset}vw`,
        //     border: '2px solid red',
        //
        // },
        // flop: {
        //     position: 'absolute',
        //     top: `${table_height/flop.offset_top_divisor}vh`,
        //     left: `${table_width/flop.offset_left_divisor}vw`,
        // },
        // turn: {
        //     position: 'absolute',
        //     top: `${turn_top_offset}vh`,
        //     left: `${turn_left_offset}vw`,
        // },
        // river: {
        //     position: 'absolute',
        //     top: `${river_top_offset}vh`,
        //     left: `${river_left_offset}vw`,
        // },
        container: {
            height: '100vh',
            width: '100vw',
            position: 'relative',
            //border: 'red solid 2px'
        },
        img_style: {
            width: '100%',
            position: 'fixed',
            zIndex: '-1'
        }

    };
    //
    // const renderBoardParams = (game_stage) => {
    //     let show_flop, show_turn, show_river;
    //     switch (game_stage) {
    //         case PRE_TURN:
    //             show_flop = true ;
    //             show_turn = false ;
    //             show_river = false ;
    //             break;
    //         case PRE_RIVER:
    //             show_flop = true;
    //             show_turn = true ;
    //             show_river = false ;
    //             break;
    //         case HAND_RESULT:
    //             show_flop = true;
    //             show_turn = true ;
    //             show_river = true ;
    //             break;
    //
    //         default:
    //             show_flop  = false ;
    //             show_turn  = false ;
    //             show_river  = false ;
    //     }
    //     return { show_flop, show_turn, show_river };
    // };
    //
    // const { show_flop, show_turn, show_river } = renderBoardParams(game_stage);

    // props.game_type, props.hands
    // TODO table info should be received as props and dynamically rendered
    // array of hands + their positions, card values etc

    return (
        <div style={styles.container} >
            <div style={styles.table}>
                <img style={styles.img_style} src={table} alt={'table'} />
                <Card
                    card_data={deck_data.card_data}
                    height={deck_data.height}
                    width={deck_data.width}
                    show_card={deck_data.show_card}
                    card_visible={deck_data.card_visible}
                    card_styles={deck_data.card_styles}
                    handleOnClick={handleNextGameStage}
                />

                <Flop
                    card1={flop_data.card1}
                    card2={flop_data.card2}
                    card3={flop_data.card3}
                    card_height={flop_data.card_height}
                    card_width={flop_data.card_width}
                    table_position={flop_data.table_position}
                    table_height={flop_data.table_height}
                    table_width={flop_data.table_width}
                    show_cards={flop_data.show_cards}
                    flop_visible={flop_data.flop_visible}
                />

                <Card
                    card_data={turn_data.card_data}
                    height={turn_data.height}
                    width={turn_data.width}
                    show_card={turn_data.show_card}
                    card_visible={turn_data.card_visible}
                    card_styles={turn_data.card_styles}
                />
                <Card
                    card_data={river_data.card_data}
                    height={river_data.height}
                    width={river_data.width}
                    show_card={river_data.show_card}
                    card_visible={river_data.card_visible}
                    card_styles={river_data.card_styles}
                />
            </div>
        </div>
    )
};

export default PokerTable;
