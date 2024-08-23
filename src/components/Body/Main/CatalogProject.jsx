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
    const [viewProject, setViewProject] = useState(3);
    const [techs, setTechs] = useState([null]);
    const [fetchTech, techIsLoading, techError] = useFetching(
        async () => {
            let techs = await ProjectService.getAllTechs();
            techs = techs.filter(tech => tech !== "none")
            setTechs(techs);
        });
    const [fetchProjects, isLoading, projectError] = useFetching(
        async () => {
            const projects = await ProjectService.getAll();
            setAllProjects(projects);
            setProjects(projects.slice(0, viewProject));
        });

    useEffect(() => {
        // eslint-disable-next-line
        fetchProjects();
        // eslint-disable-next-line
        fetchTech();
        // eslint-disable-next-line
    }, []);

    const [projectName, setProjectName] = useState("");
    const [projectStack, setProjectStack] = useState("");
    const [projectSort, setProjectSort] = useState("");

    useEffect(() => {
        const replaceProjectStack = projectStack.split(" ");
        setProjects(utils.sortProject(
            allProjects, projectName, replaceProjectStack, projectSort
        ).slice(0, viewProject));
    }, [projectName, projectStack, projectSort, viewProject, allProjects]);

    useEffect(() => {
        if (!(projectName || projectStack.length > 0 || projectSort)) {
            setViewProject(3)
        }

    }, [projectName, projectStack, projectSort])


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
            changeProjectSort={changeProjectSort} projectSort={projectSort}
            techs={techs} techIsLoading={techIsLoading} techError={techError} />
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
                    :   <div>
                            <div className={classes.wrapperAddBtn}>
                                {projects.length === 0
                                    ? <h1>Ничего не найдено!</h1>
                                    : <></>
                                }
                            </div>
                            <div className={classes.containerProject}>
                                {projects.map((project) => (
                                    <ProjectContainer project={project} key={project.id}/>
                                ))}
                            </div>
                            {viewProject < allProjects.length && projects.length > 0
                            ?   <div className={classes.wrapperAddBtn}>
                                    <button className={classes.moreAddBtn}
                                            onClick={() => setViewProject(viewProject + 3)}>
                                        <h1 className={classes.moreAddText}>
                                            Загрузить ещё
                                        </h1>
                                    </button>
                                </div>
                            :   <></>
                            }
                    </div>
                }
            </div>
        </div>
    )
        ;
};

export default CatalogProject;