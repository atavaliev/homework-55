import React from 'react';
import IngredientList from "../IngredientList/IngredientList";
import Burger from "../Burger/Burger";
import TotalPrice from "../TotalPrice/TotalPrice";
import './OrderBoard.css';

const OrderBoard = () => {
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