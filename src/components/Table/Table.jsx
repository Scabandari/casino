import React from 'react';
import table from './table.png';
//import Card from '../Card';
import Hand from '../Hand';
import table_positions from '../const/tablePositions';
import deck from '../const/deck';
import Card from "../Card/Card";
import Flop from '../Flop';


const Table = (props) => {
    
    const {
        deck_position,
        flop,
        turn,
        river,
        east,
        south,
        west,
        north,
        north_east,
        south_east,
        north_west,
        south_west,
    } = table_positions;

    const { table_height, table_width, see_flop, see_turn, see_river } = props;

    const deck_top_offset = table_height/deck_position.offset_top_divisor;
    const deck_left_offset = table_width/deck_position.offset_left_divisor;
    const turn_top_offset = table_height/turn.offset_top_divisor;
    const turn_left_offset = table_width/turn.offset_left_divisor;
    const river_top_offset = table_height/river.offset_top_divisor;
    const river_left_offset = table_width/river.offset_left_divisor;

    const styles = {
        table: {
            // height:  '55vh',
            // width: '50vw',
            height: `${table_height}vh`,
            width: `${table_width}vw`,
            position: 'fixed',
            transform: 'translate(45%, 45%)',
            //border: '3px solid red',
        },
        deck: {
            'position': 'absolute',
            'top': `${deck_top_offset}vh`,
            'left': `${deck_left_offset}vw`,
            border: '2px solid red',

        },
        flop: {
            'position': 'absolute',
            'top': `${table_height/flop.offset_top_divisor}vh`,
            'left': `${table_width/flop.offset_left_divisor}vw`,
        },
        turn: {
            'position': 'absolute',
            'top': `${turn_top_offset}vh`,
            'left': `${turn_left_offset}vw`,
        },
        river: {
            'position': 'absolute',
            'top': `${river_top_offset}vh`,
            'left': `${river_left_offset}vw`,
        }

    };

    //props.game_type, props.hands

    // TODO table info should be received as props and dynamically rendered
    // array of hands + their positions, card values etc

  return (
      <div style={{height: '100vh', width: '100vw', position: 'relative'}} >
          <div style={styles.table}>
              <img style={{ width: '100%', position: 'fixed', zIndex: '-1' }} src={table} alt={'table'} />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  table_position={north}
                  table_height={table_height}
                  table_width={table_width}
                  show_cards={false}
                  card1_visible={true}
                  card2_visible={true}
              />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  table_position={north_east}
                  table_height={table_height}
                  table_width={table_width}
                  show_cards={false}
                  card1_visible={true}
                  card2_visible={true}
              />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  table_position={south}
                  table_height={table_height}
                  table_width={table_width}
                  show_cards={true}
                  card1_visible={true}
                  card2_visible={true}
              />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  table_position={south_east}
                  table_height={table_height}
                  table_width={table_width}
                  show_cards={false}
                  card1_visible={true}
                  card2_visible={true}
              />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  table_position={east}
                  table_height={table_height}
                  table_width={table_width}
                  show_cards={false}
                  card1_visible={true}
                  card2_visible={true}
              />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  table_position={west}
                  table_height={table_height}
                  table_width={table_width}
                  show_cards={false}
                  card1_visible={true}
                  card2_visible={true}
              />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  table_position={north_west}
                  table_height={table_height}
                  table_width={table_width}
                  show_cards={false}
                  card1_visible={true}
                  card2_visible={true}
              />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  table_position={south_west}
                  table_height={table_height}
                  table_width={table_width}
                  show_cards={false}
                  card1_visible={true}
                  card2_visible={true}
              />
              <Flop
                  card1={deck.three_clubs}
                  card2={deck.three_diamonds}
                  card3={deck.two_clubs}
                  card_height={6}
                  card_width={2.5}
                  table_position={flop}
                  table_height={table_height}
                  table_width={table_width}
                  show_cards={true}
                  flop_visible={true}
              />
              <Card
                  card_data={deck.deck}
                  height={6}
                  width={2.5}
                  show_card={false}
                  card_visible={true}
                  card_styles={styles.deck}
              />
              <Card
                  card_data={deck.three_diamonds}
                  height={6}
                  width={2.5}
                  show_card={true}
                  card_visible={true}
                  card_styles={styles.turn}
              />
              <Card
                  card_data={deck.two_hearts}
                  height={6}
                  width={2.5}
                  show_card={true}
                  card_visible={true}
                  card_styles={styles.river}
              />
          </div>
      </div>
  )
};

export default Table;
