import React from 'react';

const Card = (props) => {

    const { card_data, height, width } = props;
    const styles = {
        height: `${height}vh`,
        width: `${width}vw`,
        border: '2px solid black',
        borderRadius: '3px',
        position: 'relative',
    };


    return <img style={styles} src={card_data.img} alt={"card"} />
};

export default Card;

