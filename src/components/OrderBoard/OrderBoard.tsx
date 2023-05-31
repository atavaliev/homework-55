import React, {useState} from 'react';
import IngredientList from "../IngredientList/IngredientList";
import Burger from "../Burger/Burger";
import TotalPrice from "../TotalPrice/TotalPrice";
import './OrderBoard.css';
import {IOrder} from "../../types";


const OrderBoard:React.FC = () => {
    const [ingredients, setIngredients] = useState<IOrder[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Bacon', count: 0},
        {name: 'Salad', count: 0}
    ]);

    return (
        <>
            <div className="left-side">
                <IngredientList/>
            </div>
            <div className="right-side">
                <Burger ingredientList={ingredients}/>
                <TotalPrice/>
            </div>
        </>
    );
};

export default OrderBoard;