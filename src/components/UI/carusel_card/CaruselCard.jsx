import React from 'react';
import classes from "./CaruselCard.module.css";

const CaruselCard = (props) => {

    let container = '';

    return (
        <div className={classes.container}>
            <img className={classes.imageCarusel} key={props.index} src={props.data.image} alt={`image-${props.index}`}/>
            <div className={classes.gradientOverlay}></div>
            <div className={classes.cardInfo}>
                <h1 className={classes.titleCard}>{props.data.title}</h1>
                <p className={classes.description}>{props.data.description}</p>
            </div>
        </div>
    );
};

export default CaruselCard;