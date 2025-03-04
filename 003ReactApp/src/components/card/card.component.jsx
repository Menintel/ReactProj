import React from "react";
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.subscriber.id}?set=set3&size=160x160`} alt="subscriber" />
        <h2>{props.subscriber.name}</h2>
    </div>
   
)