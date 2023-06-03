import React from 'react';

type TProps = {
    totalPrice:number;
}

const TotalPrice:React.FC<TProps> = ({totalPrice}) => {
    return (
        <div className="price">
          Price: {totalPrice}
        </div>
    );
};

export default TotalPrice;