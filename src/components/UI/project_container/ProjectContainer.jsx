import React from 'react';
import classes from "./ProjectContainer.module.css"
import ProjectCard from "../project_card/ProjectCard";

const ProjectContainer = (props) => {
    return (
        <div className={classes.container}>
            <button className={classes.btn}>
                <ProjectCard project={props.project}/>
                <div className={classes.infoCard}>
                    <div className={classes.wrapperInfoText}>
                        <p className={classes.infoText}>
                            Название: {props.project.title}
                        </p>
                    </div>
                    <div className={classes.wrapperInfoText}>
                        <p className={classes.infoText}>
                            Описание: {props.project.desc.length >= 50
                            ? props.project.desc.slice(0, 100) + '...'
                            : props.project.desc}
                        </p>
                    </div>
                </div>
            </button>
        </div>
);
};

export default ProjectContainer;