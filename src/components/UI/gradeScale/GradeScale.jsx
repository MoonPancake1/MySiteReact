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
            if (auth.isAuthenticated) {
                const grade = await ProjectService.checkSelectGrade(auth.accessToken, props.project_id);
                if (!grade.detail) {
                    console.log(grade)
                    setGrade(grade);
                }
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
        if (auth.isAuthenticated) {
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
                : grade === null
                    ?   <div className={classes.container}>
                            <div className={classes.wrapperGradesScale}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((gradeNumber) => (
                                    <GradeButton grade={gradeNumber} key={gradeNumber}
                                                 canSelectGrade={checkCanSelectGrade}
                                                 auth={auth}/>
                                ))}
                            </div>
                        </div>
                    :   <h1>Вы уже оценили этот проект на {grade.grade} баллов 😉</h1>
            }
        </div>
    );
};

export default GradeScale;