import React from 'react';
import classes from "./AvatarPrev.module.css";
import Loader from "../loader/Loader";


const AvatarPrev = (props) => {

    return (
        <div className={classes.container}>
            {props.imgLink
                ? <img src={props.imgLink} alt="" className={classes.imgAvatar}/>
                : <Loader/>
            }
        </div>
    );
};

export default AvatarPrev;