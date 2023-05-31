import React from 'react';
import {Ingredient} from "../../types";


const IngredientItem: React.FC<Ingredient> = ({name,price,imgSrc}) => {
    return (
        <div className="ingredient-item">
            <img src={imgSrc} alt={name} width={50}/>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    );
};

export default IngredientItem;