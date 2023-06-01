import React, {useState} from 'react';
import IngredientList from "../IngredientList/IngredientList";
import Burger from "../Burger/Burger";
import TotalPrice from "../TotalPrice/TotalPrice";
import './OrderBoard.css';
import {IOrder} from "../../types";


const OrderBoard:React.FC = () => {
    const [ingredients, setIngredients] = useState<IOrder[]>([
        {name: 'Cheese', count: 2},
        {name: 'Bacon', count: 1},
        {name: 'Meat', count: 3},
        {name: 'Salad', count: 1}
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