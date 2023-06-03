import React from 'react';
import {Ingredient} from "../../types";
import './IngredientItem.css';
import IconTrash from "../icons/IconTrash";
import IconPlus from "../icons/IconPlus";
import IconMinus from "../icons/IconMinus";

type TProps = {
    ingredient: Ingredient;
    count: number;
    addIngredient: (ingredient: Ingredient) => void;
    removeIngredient: (ingredient: Ingredient) => void;
    removeAllIngredient: (ingredient: Ingredient) => void;
};

const IngredientItem: React.FC<TProps> = (
    {
        ingredient,
        count,
        addIngredient,
        removeIngredient,
        removeAllIngredient
    }
) => {

    const handleAddIngredient = () => {
        addIngredient(ingredient);
    };

    const handleRemoveIngredient = () => {
        removeIngredient(ingredient);
    };
    const handleRemoveAllIngredient = () => {
        removeAllIngredient(ingredient);
    };

    return (
        <div className="ingredient-item">
            <img src={ingredient.imgSrc} alt={ingredient.name} width={50} onClick={handleAddIngredient}/>
            <div className="name">{ingredient.name}</div>

            <div className="quantity">{count}</div>

            <span className="decrease" onClick={handleRemoveIngredient}>
                <IconMinus/>
            </span>
            <div className="price">{ingredient.price}</div>
            <span className="increase" onClick={handleAddIngredient}>
                <IconPlus/>
            </span>

            <span className="delete" onClick={handleRemoveAllIngredient}>
                <IconTrash/>
            </span>
        </div>
    );
};

export default IngredientItem;
