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
            'top': `${table_height/deck_position.offset_top_divisor}vh`,
            'left': `${table_width/deck_position.offset_left_divisor}vw`,
        },
        flop: {
            'position': 'absolute',
            'top': `${table_height/flop.offset_top_divisor}vh`,
            'left': `${table_width/flop.offset_left_divisor}vw`,
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
              />
              <div style={styles.deck}>
                  <Card
                      card_data={deck.deck}
                      height={6}
                      width={2.5}
                      show_card={false}
                  />
              </div>

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
              />

          </div>
      </div>
  )
};

export default Table;
