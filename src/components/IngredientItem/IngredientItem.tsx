import React from 'react';
import {Ingredient} from "../../types";
import './IngredientItem.css';


const IngredientItem: React.FC<Ingredient> = ({name,price,imgSrc}) => {
    return (
        <div className="ingredient-item">
            <img src={imgSrc} alt={name} width={50}/>
            <div className="name">{name}</div>
            <span className="decrease">-</span>
            <div className="price">{price}</div>
            <span className="increase">+</span>
            <span className="delete">X</span>
        </div>
    );
};

export default IngredientItem;