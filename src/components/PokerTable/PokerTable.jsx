import React from 'react';
import table from './table.png';
import Hand from '../Hand';
import Card from "../Card/Card";
import Flop from '../Flop';

const PokerTable = (props) => {

    const {
        table_height,
        table_width,
        card_height,
        card_width,
        handleNextGameStage,
        deck,
        flop,
        turn,
        river,
        show_flop,
        show_turn,
        show_river,
        hands,
    } = props;

    const styles = {
        table: {
            height: `${table_height}vh`,
            width: `${table_width}vw`,
            transform: 'translate(45%, 10%)',
            //border: 'blue solid 2px',
        },
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

    return (
        <div style={styles.container} >
            <div style={styles.table}>
                <img style={styles.img_style} src={table} alt={'table'} />
                <Card
                    card_data={deck.card_data}
                    height={card_height}
                    width={card_width}
                    show_card={deck.show_card}
                    card_visible={deck.card_visible}
                    card_styles={deck.card_styles}
                    handleOnClick={handleNextGameStage}
                />

                <Flop
                    card1={flop.card1}
                    card2={flop.card2}
                    card3={flop.card3}
                    card_height={card_height}
                    card_width={card_width}
                    table_position={flop.table_position}
                    table_height={table_height}
                    table_width={table_width}
                    show_cards={flop.show_cards}
                    flop_visible={show_flop}
                />

                <Card
                    card_data={turn.card_data}
                    height={card_height}
                    width={card_width}
                    show_card={turn.show_card}
                    card_visible={show_turn}
                    card_styles={turn.card_styles}
                />
                <Card
                    card_data={river.card_data}
                    height={card_height}
                    width={card_width}
                    show_card={river.show_card}
                    card_visible={show_river}
                    card_styles={river.card_styles}
                />
                {
                    hands.map(hand => {
                        return (
                            <Hand
                                key={hand.id}
                                card1={hand.card1}
                                card2={hand.card2}
                                card_height={card_height}
                                card_width={card_width}
                                table_position={hand.table_position}
                                table_height={table_height}
                                table_width={table_width}
                                show_cards={hand.show_cards}
                                card1_visible={hand.card1_visible}
                                card2_visible={hand.card2_visible}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default PokerTable;
