import React from "react";
import './card-list.styles.css'
import { Card } from "../card/card.component";


export const CardList = (props) => {
    return(
        <>
        <div className="card-list-container">
            <div className="card-list">
            {
              props.subscribers.map(subscriber => (
                <Card key={subscriber.id} subscriber={subscriber}/>
            ))}
            </div>
        </div> 
        </> 
    );
}