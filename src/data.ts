import {Ingredient} from "./types";

import meatImage from '../src/assets/meat.png';
import cheeseImage from '../src/assets/cheese.png';
import saladImage from '../src/assets/salad.png';
import baconImage from '../src/assets/bacon.png';

const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, imgSrc: meatImage},
    {name: 'Cheese', price: 50, imgSrc: cheeseImage},
    {name: 'Salad', price: 10, imgSrc: saladImage},
    {name: 'Bacon', price: 60, imgSrc: baconImage},
];

export {INGREDIENTS};