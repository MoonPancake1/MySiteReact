import React from 'react';
import classes from "./SubTextProject.module.css";


const SubTextProject = (props) => {

    function getStatus(status) {
        if (status === "in develop") {
            return "in-develop"
        }
        return status
    }

    return (
        <div>
            {props.isColor
                    ?   <div className={classes.container}>
                            <p className={classes.subHeader}>
                                <strong>{props.header}</strong>
                            </p>
                            <p className={[classes.subInfoColor, `${getStatus(props.info)}Status`].join(' ')}>
                                {props.info === "active"
                                ? "работает"
                                : props.info === "in develop"
                                    ? "в разработке"
                                    : "не работает"}
                            </p>
                        </div>
                    :   <div className={classes.container}>
                            <p className={classes.subHeader}>
                                <strong>{props.header}</strong> {props.info}
                            </p>
                        </div>
            }
        </div>
    );
};

export default SubTextProject;