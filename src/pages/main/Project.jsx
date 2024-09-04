import React, {useContext, useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProjectBlock from "../../components/Body/Projects/ProjectBlock";
import {useParams} from "react-router-dom";
import {useFetching} from "../../components/hooks/useFetching";
import ProjectService from "../../Api/ProjectService";
import Loader from "../../components/UI/loader/Loader";
import {AuthContext} from "../../context";

const Project = () => {

    const params = useParams();
    const auth = useContext(AuthContext);

    const [project, setProject] = useState([]);
    const [fetchProject, isLoading, projectError] = useFetching(
        async () => {
            const project = await ProjectService.getProjectById(params.id);
            setProject(project);
    })

    useEffect(() => {
        fetchProject();
        // eslint-disable-next-line
    }, []);

    async function createGrade (grade) {
        await ProjectService.createGrade(auth.accessToken,
                params.id, grade);
        fetchProject();
    }

    return (
        <div>
            {isLoading
                ?   <Loader />
                :   <div>
                        <Header title={"Страница проекта"} />
                        <ProjectBlock project_id={params.id} fetchProject={fetchProject} project={project}
                                      projectError={projectError} createGrade={createGrade} />
                        <Footer />
                    </div>
            }
        </div>
    );
};

export default Project;