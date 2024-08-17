import React, {useEffect, useState} from 'react';
import classes from '../../styles/Body/CatalogProject.module.css'
import ProjectContainer from "../UI/project_container/ProjectContainer";
import ProjectService from "../../Api/ProjectService";
import Loader from "../UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";

const CatalogProject = () => {

    const [projects, setProjects] = useState([]);
    const [fetchProjects, isLoading, projectError] = useFetching(
        async () => {
            const projects = await ProjectService.getAll();
            setProjects(projects);
    })

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.wrapperTitleBlock}>
                <h1 className={classes.TitleBlock}>Каталог проектов</h1>
            </div>
            <div className={classes.wrapperContainer}>
                {projectError &&
                    <div className={classes.wrapperError}>
                        <h1>Произошла ошибка!</h1>
                    </div>
                }
                {isLoading
                    ?   <div className={classes.wrapperLoader}>
                            <Loader />
                        </div>
                    :   <div className={classes.containerProject}>
                            {projects.map((project) => (
                                <ProjectContainer project={project} key={project.id}/>
                            ))}
                        </div>
                }

            </div>
        </div>
    )
        ;
};

export default CatalogProject;