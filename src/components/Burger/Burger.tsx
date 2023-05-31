import React from 'react';
import {IOrder} from "../../types";
import './Burger.css'

type TProps = {
    ingredientList: IOrder[];
}


const Burger: React.FC<TProps> = ({ingredientList}) => {

    {
        console.log(ingredientList)
    }
    return (
        <div className="Burger">

            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            <>
                {
                    ingredientList.map(i => {
                     return  (<div className={i.name}/>)
                    })
                }
            </>
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;