import React from 'react';
import classes from "./ProjectContainer.module.css"
import ProjectCard from "../project_card/ProjectCard";
import {useNavigate} from "react-router-dom";
import StatusCode from "../statusCode/StatusCode";
import utils from "../../../utils/utils";

const ProjectContainer = (props) => {

    const router = useNavigate();

    let view = utils.getViews(props.project.view);

    return (
        <div className={classes.container}>
            <div className={classes.wrapperInfoCard}>
                <ProjectCard project={props.project}/>
                <div className={classes.infoCard}>
                    <div className={classes.wrapperInfoText}>
                        <p className={classes.infoTextName}>
                            {props.project.title.length > 14
                            ? `${props.project.title.substring(0, 11)}...`
                            : props.project.title}
                        </p>
                    </div>
                    <div className={classes.wrapperInfoText}>
                        <p className={classes.infoText}>
                            Просмотры: {view}
                        </p>
                        <p className={classes.infoText}>
                            {props.project.rate === -1
                            ? `Оценок пока нет`
                            : `Рейтинг: ${props.project.rate}/10`}
                        </p>
                        <StatusCode status={props.project.status} />
                    </div>
                    <button className={classes.moreInfoBtn} onClick={() => router(`project/${props.project.id}`)}>
                        <h1 className={classes.moreInfoText}>Подробнее</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectContainer;