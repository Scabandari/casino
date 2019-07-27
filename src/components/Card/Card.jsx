import React from 'react';
import back from './images/back.png';

const Card = (props) => {

    const {
        card_data,
        height,
        width,
        show_card,
        card_visible,
        card_styles,
    } = props;
    const styles = {
        height: `${height}vh`,
        width: `${width}vw`,
        border: '2px solid black',
        position: 'relative',
        visibility: card_visible ? 'visible' : 'hidden',

    };

    const combined_styles = Object.assign({}, styles, card_styles);  // {...styles, card_styles};
    if(card_styles) {
        console.log(`combined_styles: ${JSON.stringify(combined_styles)}`);
    }


    return <img style={combined_styles} src={show_card? card_data.img : back} alt={"card"} />
};

export default Card;

