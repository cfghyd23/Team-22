import React from 'react';

export default function CardHolder(props){

    const {cardData} = props;

    return (
        
        <div className="container py-4">
            {cardData}
        </div>
        
      ) 
}