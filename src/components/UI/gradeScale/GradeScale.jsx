import React, {useContext, useEffect, useState} from 'react';
import classes from "./GradeScale.module.css";
import GradeButton from "../gradeButton/GradeButton";
import {useFetching} from "../../hooks/useFetching";
import ProjectService from "../../../Api/ProjectService";
import Modal from "../modal_error/Modal";
import Loader from "../loader/Loader";
import {AuthContext} from "../../../context";

const GradeScale = (props) => {

    const auth = useContext(AuthContext);

    const [grade, setGrade] = useState(null);

    const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);

    // eslint-disable-next-line
    const [fetchGrade, isLoading, gradeError] = useFetching(
        async () => {
            // const access_token = localStorage.getItem("access_token");
            // const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwic3ViIjoiOTE0ZjU2ZDQtYjYxNi00YjZmLTg3MTAtOWY5ZWI3MWRlMTYyIiwiZXhwIjoxNzI0MzUwNjYzfQ.XQ6FfcvYoIVbgaL8f3ov9v2a72g8R1xTPKUAsR1qwd4"
            if (auth.user.access_token) {
                const grade = await ProjectService.checkSelectGrade(auth.user.access_token, props.project_id);
                setGrade(grade);
            } else {
                setGrade(null);
            }

    })

    useEffect(() => {
        // eslint-disable-next-line
        fetchGrade();
        // eslint-disable-next-line
    }, []);

    function checkCanSelectGrade(){
        if (auth.user) {
            return true
        }
        setModalInfoIsOpen(true);
        return false
    }

    return (
        <div>
            <Modal isOpen={modalInfoIsOpen} onClose={()=> setModalInfoIsOpen(false)}
            title={"Ошибка"} msg={"Для оценки проекта вам необходимо авторизироваться 🔑"}/>
            <div className={classes.wrapperTitle}>
                <p className={classes.titleText}>
                    Оцените проект:
                    <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f917.png" alt=""
                         style={{width: '24px', height: '24px'}}/>
                </p>
            </div>
            {isLoading
                ? <Loader/>
                : grade
                    ? <h1>Вы уже оценили этот проект на {grade.grade} баллов 😉</h1>
                    : <div className={classes.container}>
                        <div className={classes.wrapperGradesScale}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((grade) => (
                                <GradeButton grade={grade} key={grade} canSelectGrade={checkCanSelectGrade}
                                user={auth.user}/>
                            ))}
                        </div>
                    </div>
            }
        </div>
    );
};

export default GradeScale;