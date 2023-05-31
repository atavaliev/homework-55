import React from 'react';
import IngredientItem from "../IngredientItem/IngredientItem";


const IngredientList = () => {
    return (
        <div>
            <IngredientItem
                name={'Meat'}
                price={60}
                imgSrc={'https://crm-media-bucket.s3.amazonaws.com/media/2022-10-31/5b6a94cc-dee5-4165-b39d-c57b3047afb01667208332587.png'}/>
        </div>
    );
};

export default IngredientList;