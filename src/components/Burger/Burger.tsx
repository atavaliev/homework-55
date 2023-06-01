import React from 'react';
import {IOrder} from "../../types";
import './Burger.css'

type TProps = {
    ingredientList: IOrder[];
}

const Burger: React.FC<TProps> = ({ingredientList}) => {

    return (
        <div className="Burger">

            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            <>
                {
                    ingredientList.map(i => (
                        Array.from({ length: i.count }, (_, index) => (
                            <div className={i.name} key={index} />
                        ))
                    ))
                }
            </>
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;