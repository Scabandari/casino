import React from 'react';
import back from './images/back.png';

const Card = (props) => {

    const { card_data, height, width, show_card } = props;
    const styles = {
        height: `${height}vh`,
        width: `${width}vw`,
        border: '2px solid black',
        borderRadius: '3px',
        position: 'relative',
    };


    return <img style={styles} src={show_card? card_data.img : back} alt={"card"} />
};

export default Card;

