import React from 'react';
import classes from "./ProjectContainer.module.css"
import ProjectCard from "../project_card/ProjectCard";

const ProjectContainer = (props) => {
    return (
        <div className={classes.container}>
            <ProjectCard project={props.project}/>
            <h1>{props.project.title}</h1>
        </div>
    );
};

export default ProjectContainer;