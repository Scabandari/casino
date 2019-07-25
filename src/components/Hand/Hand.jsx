import React from 'react';
import Card from '../Card';

const Hand = (props) => {

    // TODO card height and width can be set using Redux when screen size is first calculated?
    // TODO all of card data isn't needed, just the img, as long as some higher up
    // component is keeping track of who has what cards
    const {
        card1,
        card2,
        card_height,
        card_width,
        hand_position,
        table_height,
        table_width
    } = props;

    return (
        <div style={{
            'position': 'absolute',
            'top': `${table_height/hand_position.offset_top_divisor}vh`,
            'left': `${table_width/hand_position.offset_left_divisor}vw`,
            }}>
            <Card
                card_data={card1}
                height={card_height}
                width={card_width}
            />
            <Card
                card_data={card2}
                height={card_height}
                width={card_width}
            />
        </div>
    )
};

export default Hand;