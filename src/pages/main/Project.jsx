import React, {useContext, useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProjectBlock from "../../components/Body/Projects/ProjectBlock";
import {TitleContext} from "../../context";
import {useParams} from "react-router-dom";
import {useFetching} from "../../components/hooks/useFetching";
import ProjectService from "../../Api/ProjectService";
import Loader from "../../components/UI/loader/Loader";

const Project = () => {

    const {title, setTitle} = useContext(TitleContext);

    const params = useParams();

    const [project, setProject] = useState([]);
    const [fetchProject, isLoading, projectError] = useFetching(
        async () => {
            const project = await ProjectService.getProjectById(params.id);
            setProject(project);
    })

    useEffect(() => {
        fetchProject();
    }, []);

    return (
        <div>
            {isLoading
                ?   <Loader />
                :   <div>
                        <Header title={"Страница проекта"} />
                        <ProjectBlock fetchProject={fetchProject} project={project} projectError={projectError} />
                        <Footer />
                    </div>
            }
        </div>
    );
};

export default Project;