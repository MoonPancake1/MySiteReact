import React from 'react';
import classes from "./GradeButton.module.css";

const GradeButton = (props) => {

    async function selectGrade () {
        if (props.canSelectGrade()) {
            await props.createGrade(props.grade);
        }
    }

    return (
        <button onClick={selectGrade} className={classes.btnGrade}>
            {props.grade}
        </button>
    );
};

export default GradeButton;