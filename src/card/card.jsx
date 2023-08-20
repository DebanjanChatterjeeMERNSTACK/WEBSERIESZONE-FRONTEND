import React from "react";
import "../card/card.css";

import { NavLink } from "react-router-dom";


const Card = ({data}) => {
  
   
    
    return (
        <>
            <NavLink to={`/download/${data._id}`} key={data._id}>
            <div className="card" >
                 <img src={data.image[0]} className="img" />
                <p className="title">{data.title}</p>
            </div>
            </NavLink>
        </>
    )
}
export default Card