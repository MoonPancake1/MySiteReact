import React from 'react';
import classes from '../../styles/Body/CatalogProject.module.css'
import ProjectContainer from "../UI/project_container/ProjectContainer";

const CatalogProject = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.wrapperTitleBlock}>
                <h1 className={classes.TitleBlock}>Каталог проектов</h1>
            </div>
            <div className={classes.wrapperContainer}>
                <div className={classes.containerProject}>
                    {props.projects.map((project) => (
                        <ProjectContainer project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatalogProject;