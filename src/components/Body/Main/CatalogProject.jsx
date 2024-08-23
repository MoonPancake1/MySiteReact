import React, {useEffect, useState} from 'react';
import classes from '../../../styles/Body/Main/CatalogProject.module.css'
import ProjectContainer from "../../UI/project_container/ProjectContainer";
import ProjectService from "../../../Api/ProjectService";
import Loader from "../../UI/loader/Loader";
import {useFetching} from "../../hooks/useFetching";
import FilterProject from "./FilterProject";
import utils from "../../../utils/utils";

const CatalogProject = () => {

    const [allProjects, setAllProjects] = useState([]);
    const [projects, setProjects] = useState([]);
    const [fetchProjects, isLoading, projectError] = useFetching(
        async () => {
            const projects = await ProjectService.getAll();
            setAllProjects(projects);
            setProjects(projects);
    })

    useEffect(() => {
        fetchProjects();
    }, []);

    const [projectName, setProjectName] = useState("");
    const [projectStack, setProjectStack] = useState("");
    const [projectSort, setProjectSort] = useState("");

    useEffect(() => {
        const replaceProjectStack = projectStack.split(" ");
        setProjects(utils.sortProject(allProjects, projectName, replaceProjectStack, projectSort));
    }, [projectName, projectStack, projectSort]);


    function changeProjectName(name) {
        setProjectName(name);
    }

    function changeProjectStack(stack) {
        setProjectStack(stack);
    }

    function changeProjectSort(sort) {
        setProjectSort(sort);
    }


    return (
        <div className={classes.container}>
            <FilterProject changeProjectName={changeProjectName} projectName={projectName}
            changeProjectStack={changeProjectStack} projectStack={projectStack}
            changeProjectSort={changeProjectSort} projectSort={projectSort} />
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