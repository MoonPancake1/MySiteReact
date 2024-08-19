import React from 'react';
import classes from "./StatusCode.module.css";

const StatusCode = (props) => {
    return (
        <div className={classes.wrapperStatusCode}>
            Статус:
            {props.status === 'active'
                ? <p className={classes.active}>работает</p>
                : props.status === 'in develop'
                    ? <p className={classes.develop}>в разработке</p>
                    : <p className={classes.inactive}>не работает</p>
            }
        </div>
    );
};

export default StatusCode;