import React from 'react';
import Card from '../Card';

const Hand = (props) => {

    const {
        card1,
        card2,
        card_height,
        card_width,
        table_position,
        table_height,
        table_width,
        show_cards,
    } = props;

    const styles = {
        position: 'absolute',
        top: `${table_height/table_position.offset_top_divisor}vh`,
        left: `${table_width/table_position.offset_left_divisor}vw`,
        transform: `rotate(${table_position.rotation}deg)`

    };
    // TODO card height and width can be set using Redux when screen size is first calculated?
    // TODO all of card data isn't needed, just the img, as long as some higher up
    // TODO div holding Hand in Table shouldn't have css, pass down as props instead
    // component is keeping track of who has what cards


    return (
        <div style={styles}>
            <Card
                card_data={card1}
                height={card_height}
                width={card_width}
                show_card={show_cards}
            />
            <Card
                card_data={card2}
                height={card_height}
                width={card_width}
                show_card={show_cards}
            />
        </div>
    )
};

export default Hand;