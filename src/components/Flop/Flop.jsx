import React from 'react';
import Card from '../Card';

const Flop = (props) => {
    const {
        card1,
        card2,
        card3,
        card_height,
        card_width,
        table_position,
        table_height,
        table_width,
        show_cards,
        flop_visible,
    } = props;

    return (
        <div style={{
            'position': 'absolute',
            'top': `${table_height/table_position.offset_top_divisor}vh`,
            'left': `${table_width/table_position.offset_left_divisor}vw`,
        }}>
            <Card
                card_data={card1}
                height={card_height}
                width={card_width}
                show_card={show_cards}
                card_visible={flop_visible}
            />
            <Card
                card_data={card2}
                height={card_height}
                width={card_width}
                show_card={show_cards}
                card_visible={flop_visible}
            />
            <Card
                card_data={card3}
                height={card_height}
                width={card_width}
                show_card={show_cards}
                card_visible={flop_visible}
            />
        </div>
    )
};

export default Flop;