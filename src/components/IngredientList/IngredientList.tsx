import React from 'react';
import IngredientItem from "../IngredientItem/IngredientItem";
import { INGREDIENTS } from "../../data";
import './IngredientList.css';
import { Ingredient, IOrder } from "../../types";

type TProps = {
    ingredients: IOrder[];
    addIngredient: (ingredient: Ingredient) => void;
    removeIngredient: (ingredient: Ingredient) => void;
    removeAllIngredient: (ingredient: Ingredient) => void;
};

const IngredientList: React.FC<TProps> = ({ ingredients, addIngredient, removeIngredient,removeAllIngredient }) => {

    const getIngredientCount = (ingredientName: string, ingredients: IOrder[]): number => {
        const ingredient = ingredients.find((item) => item.name === ingredientName);
        return ingredient ? ingredient.count : 0;
    };

    return (
        <div className="ingredient-list">
            {INGREDIENTS.map((ingredient) => (
                <IngredientItem
                    key={ingredient.name}
                    ingredient={ingredient}
                    count={getIngredientCount(ingredient.name, ingredients)}
                    addIngredient={addIngredient}
                    removeIngredient={removeIngredient}
                    removeAllIngredient={removeAllIngredient}
                />
            ))}
        </div>
    );
};


export default IngredientList;
