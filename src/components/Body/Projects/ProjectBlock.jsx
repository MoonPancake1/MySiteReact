import React from 'react';
import classes from '../../../styles/Body/Projects/ProjectBlock.module.css'
import SubTextProject from "../../UI/subTextProject/SubTextProject";
import "../../../styles/Body/Projects/techSpans.css"
import utils from "../../../utils/utils";
import GradeScale from "../../UI/gradeScale/GradeScale";
import CommentsBlock from "../../UI/commentsList/CommentsBlock";

const ProjectBlock = (props) => {

    function parseStack (stack)
    {
        let techSpans = []

        for (const item in stack) {
            for (const tech in stack[item]) {
                const value = stack[item][tech];
                if (value !== "None") {
                    if (item === "ci/cd"){
                        techSpans.push(<span className={"ci-cd"} key={value}>{value}</span>);
                    } else {
                        techSpans.push(<span className={item} key={value}>{value}</span>);
                    }

                }
            }
        }

        return techSpans;
    }

    return (
        <div className={classes.container}>
            {props.projectError && "Произошла ошибка!"}
            <div className={classes.containerData}>
                <div className={classes.containerImgData}>
                    <div className={classes.containerImg}>
                        <img src={props.project.link_logo} alt="" className={classes.imgProject}/>
                    </div>
                    <div className={classes.containerProjectData}>
                        <SubTextProject isColor={false} header={"Релиз:"}
                                        info={utils.getFormattedDate(props.project.realize_project)}/>
                        <SubTextProject isColor={false} header={"Стек:"}
                                        info={parseStack(props.project.stack)}/>
                        <SubTextProject isColor={true} header={"Статус:"}
                                        info={props.project.status}/>
                        <SubTextProject isColor={false} header={"Просмотры:"}
                                        info={utils.getViews(props.project.view)}/>
                        <SubTextProject isColor={false} header={"Рейтинг:"}
                                        info={utils.getRate(props.project.rate)}/>
                    </div>
                </div>
                <div className={classes.containerMainData}>
                    <div className={classes.containerTitle}>
                        <p className={classes.title}>{props.project.title}</p>
                    </div>
                    <div className={classes.containerDescription}>
                        <p className={classes.description}>
                            {props.project.description}
                        </p>
                    </div>
                    <div className={classes.containerButtonAction}>
                        <a href={props.project.project_link} target="_blank" rel="noreferrer"
                           className={classes.linkAction}>
                            <button className={classes.buttonAction}>
                                Перейти
                            </button>
                        </a>
                    </div>
                    <div className={classes.containerSputnikEmoji}>
                        <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f6f0-fe0f.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className={classes.containerGrade}>
                <GradeScale project_id={props.project_id}/>
            </div>
            <div className={classes.containerCommentsList}>
                <CommentsBlock project_id={props.project_id}/>
            </div>
        </div>
    );
};

export default ProjectBlock;