import React from 'react';
import classes from './ProjectCard.module.css';

const ProjectCard = (props) => {

    return (
        <div className={classes.wrapperCard}>
            <img src={props.project.link_logo} alt="" className={classes.imgProject}/>
        </div>
    );
};

export default ProjectCard;