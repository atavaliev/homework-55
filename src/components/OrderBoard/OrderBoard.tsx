import React, {useState} from 'react';
import IngredientList from "../IngredientList/IngredientList";
import Burger from "../Burger/Burger";
import TotalPrice from "../TotalPrice/TotalPrice";
import './OrderBoard.css';
import {Ingredient, IOrder} from "../../types";
import {INGREDIENTS} from "../../data";

const OrderBoard: React.FC = () => {
    const [ingredients, setIngredients] = useState<IOrder[]>([
        {name: 'Cheese', count: 2},
        {name: 'Bacon', count: 1},
        {name: 'Meat', count: 3},
        {name: 'Salad', count: 1}
    ]);

    //Increase Ingredient Quantity
    const addIngredient = (ingredient: Ingredient): void => {
        const IngredientsCopy = [...ingredients];
        const currentIngredient = IngredientsCopy.find(item => item.name === ingredient.name);
        if (currentIngredient) {
            currentIngredient.count += 1;
        } else {
            IngredientsCopy.push({name: ingredient.name, count: 1});
        }
        setIngredients(IngredientsCopy);
    };

    //Decrease Ingredient Quantity
    const removeIngredient = (ingredient: Ingredient) => {
        const IngredientsCopy = [...ingredients];
        const currentIngredient = IngredientsCopy.find((item) => item.name === ingredient.name);

        if (currentIngredient) {
            currentIngredient.count -= 1;

            if (currentIngredient.count === 0) {
                const index = IngredientsCopy.indexOf(currentIngredient);
                IngredientsCopy.splice(index, 1);
            }
        }

        setIngredients(IngredientsCopy);
    };

    //Remove all Ingredient from Burger
    const removeAllIngredient = (ingredient: Ingredient) => {
        const IngredientsCopy = [...ingredients];
        const currentIngredient = IngredientsCopy.find((item) => item.name === ingredient.name);

        if (currentIngredient) {
            currentIngredient.count = 0;
            const index = IngredientsCopy.indexOf(currentIngredient);
            IngredientsCopy.splice(index, 1);
        }

        setIngredients(IngredientsCopy);
    };

    //Get Ingredient price from CONST
    const getIngredientPrice = (ingredientName: string): number => {
        const ingredient = INGREDIENTS.find(ingredient => ingredient.name === ingredientName);
        return ingredient ? ingredient.price : 0;
    };

    //Total Price
    const getTotalPrice = (): number => {
        return ingredients.reduce((acc, value) => {
            return acc + value.count * getIngredientPrice(value.name);
        }, 30);
    }

    return (
        <>
            <div className="left-side">
                <IngredientList
                    ingredients={ingredients}
                    addIngredient={addIngredient}
                    removeIngredient={removeIngredient}
                    removeAllIngredient={removeAllIngredient}
                />
            </div>
            <div className="right-side">
                <Burger ingredientList={ingredients}/>
                <TotalPrice totalPrice={getTotalPrice()}/>
            </div>
        </>
    )
};

export default OrderBoard;