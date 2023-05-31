import React from 'react';
import IngredientItem from "../IngredientItem/IngredientItem";
import {INGREDIENTS} from "../../data";
import './IngredientList.css';

const IngredientList: React.FC = () => {
    return (
        <div className="ingredient-list">
            {
                INGREDIENTS.map(i => {
                        return <IngredientItem
                            name={i.name}
                            price={i.price}
                            imgSrc={i.imgSrc}/>
                    }
                )

            }
        </div>
    );
};

export default IngredientList;