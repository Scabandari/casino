import card_types from './cardTypes';
import card_values from './cardValues'
import card_imgs from '../Card/images/index';

const { hearts, diamonds, spades, clubs } = card_types;
const { ace, two, three } = card_values;
const {
    clubs_2,

    hearts_2,
    hearts_3,

    spades_2,

    diamonds_2,
    diamonds_3,

    clubs_3,
    back,
} = card_imgs;


const deck = {

    two_clubs: {
        value: two,
        suit: clubs,
        img: clubs_2,
    },
    three_clubs: {
        value: three,
        suit: clubs,
        img: clubs_3,
    },
    two_hearts: {
        value: two,
        suit: hearts,
        img: hearts_2,
    },
    three_hearts: {
        value: three,
        suit: hearts,
        img: hearts_3,
    },
    two_spades: {
        value: two,
        suit: spades,
        img: spades_2,
    },
    two_diamonds: {
        value: two,
        suit: diamonds,
        img: diamonds_2,
    },
    three_diamonds: {
        value: three,
        suit: diamonds,
        img: diamonds_3,
    },
    deck: {
        img: back,
    }
};

export default deck;