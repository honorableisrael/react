import React from 'react';
import Style from '../ContactItems/card.css'



const Cards = (props) => {
    return (
        <div>
            <div className={Style.card_item}>
                <div className={Style.card_image} style={{backgroundImage:`url(.../../image/${props.img}.jpg)`}}>
                </div>
                <div>{props.caption}</div>
            </div>
            
        </div>
    );
};



export default Cards;