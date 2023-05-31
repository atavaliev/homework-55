import React, {useState} from 'react';
import IngredientList from "../IngredientList/IngredientList";
import Burger from "../Burger/Burger";
import TotalPrice from "../TotalPrice/TotalPrice";
import './OrderBoard.css';


interface IOrder {
    name: string;
    count: number;
};

const OrderBoard = () => {

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
                <Burger/>
                <TotalPrice/>
            </div>
        </>
    );
};

export default OrderBoard;