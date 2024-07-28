import React from 'react';
import classes from '../../styles/Body/CatalogProject.module.css'
import ProjectContainer from "../UI/project_container/ProjectContainer";

const CatalogProject = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapperTitleBlock}>
                <h1 className={classes.TitleBlock}>Каталог проектов</h1>
            </div>
            <div className={classes.containerProject}>
                <ProjectContainer/>
                <ProjectContainer/>
                <ProjectContainer/>
            </div>
        </div>
    );
};

export default CatalogProject;