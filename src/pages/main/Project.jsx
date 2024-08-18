import React from 'react';
// import {useParams} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProjectBlock from "../../components/Body/Projects/ProjectBlock";

const Project = () => {
    // const params = useParams();
    // params.id - id проекта

    return (
        <div>
            <Header />
            <ProjectBlock />
            <Footer />
        </div>
    );
};

export default Project;