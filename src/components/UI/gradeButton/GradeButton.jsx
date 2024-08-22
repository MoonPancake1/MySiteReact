import React from 'react';
import classes from "./GradeButton.module.css";
import ProjectService from "../../../Api/ProjectService";
import {useParams} from "react-router-dom";

const GradeButton = (props) => {

    const params = useParams();

    async function selectGrade () {
        if (props.canSelectGrade()) {
            await ProjectService.createGrade(props.user.access_token,
                params.id, props.grade);
        }
    }

    return (
        <button onClick={selectGrade} className={classes.btnGrade}>
            {props.grade}
        </button>
    );
};

export default GradeButton;