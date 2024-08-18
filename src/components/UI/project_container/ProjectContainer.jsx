import React from 'react';
import classes from "./ProjectContainer.module.css"
import ProjectCard from "../project_card/ProjectCard";
import {useNavigate} from "react-router-dom";

const ProjectContainer = (props) => {

    const router = useNavigate();

    let view;

    if (props.project.view < 10**3) {
        view = props.project.view;
    } else if (100 > props.project.view / 10**3 > 0){
        view = `${Math.round(props.project.view / 10**3)} тыс`;
    } else if (props.project.view / 10**6 > 0){
        view = `${Math.round(props.project.view / 10**6)} млн`;
    }
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
                        <div className={classes.wrapperStatusCode}>
                            Статус:
                            {props.project.status === 'active'
                                ? <p className={classes.active}>работает</p>
                                : props.project.status === 'in develop'
                                    ? <p className={classes.develop}>в разработке</p>
                                    : <p className={classes.inactive}>не работает</p>
                            }
                        </div>
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