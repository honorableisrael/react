import React from 'react';


const InfoDetails =(props)=>{
    return(
            <div>
            <h3>Name:{props.name}</h3>
            <h3>Job Details:{props.job}</h3>
            <button onClick={props.delete} style={{backgroundColor:'skyblue',padding:5}}>Delete</button>
            </div>
    )
}
export default InfoDetails;