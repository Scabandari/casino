import card_types from './cardTypes';
import card_values from './cardValues'
import card_imgs from '../images';

const { hearts, diamonds, spades, clubs } = card_types;
const { ace, two, three } = card_values;
const { clubs_2, diamonds_2, back} = card_imgs;

const deck = {
    two_clubs: {
        value: two,
        suit: clubs,
        img: clubs_2
    },
    two_diamonds: {
        value: two,
        suit: diamonds,
        img: diamonds_2
    }
};

export default deck;