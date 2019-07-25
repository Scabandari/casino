import React from 'react';
import table from './table.png';
//import Card from '../Card';
import Hand from '../Hand';
import hand_positions from '../Card/const/handPositions';
import deck from '../Card/const/deck';


const Table = (props) => {

    const {table_height, table_width} = props;
    const styles = {
        // height:  '55vh',
        // width: '50vw',
        height: `${table_height}vh`,
        width: `${table_width}vw`,
        position: 'fixed',
        transform: 'translate(45%, 45%)',
        border: '3px solid red',
    };

    //props.game_type, props.hands

    // TODO table info should be received as props and dynamically rendered
    // array of hands + their positions, card values etc

  return (
      <div style={{height: '100vh', width: '100vw', position: 'relative'}} >
          <div style={styles}>
              <img style={{ width: '100%', position: 'fixed', zIndex: '-1' }} src={table} alt={'table'} />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  hand_position={hand_positions.twelve}
                  table_height={table_height}
                  table_width={table_width}

              />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  hand_position={hand_positions.six}
                  table_height={table_height}
                  table_width={table_width}
              />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  hand_position={hand_positions.three}
                  table_height={table_height}
                  table_width={table_width}
              />
              <Hand
                  card1={deck.two_clubs}
                  card2={deck.two_diamonds}
                  card_height={6}
                  card_width={2.5}
                  hand_position={hand_positions.nine}
                  table_height={table_height}
                  table_width={table_width}
              />

          </div>
      </div>
  )
};

export default Table;
