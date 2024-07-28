import React from 'react';
import classes from "../../styles/Body/FilterProject.module.css";
import InputBox from "../UI/input_box/InputBox";
import ButtonSearch from "../UI/buttonSearch/ButtonSearch";


const FilterProject = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapperMainText}>
                <h1>Сортировка</h1>
            </div>
            <div className={classes.containerInput}>
                <div className={classes.wrapperInputBox1}>
                    <InputBox name={"Search"}
                              placeholder={"🕵️ Поиск..."}/>
                </div>
                <div className={classes.wrapperInputBox2}>
                    <InputBox name={"Stack"}
                              placeholder={"📚 Стек"}/>
                </div>
                <div className={classes.wrapperInputBox3}>
                    <InputBox name={"Sorted"}
                              placeholder={"📈 Сортировка"}/>
                </div>
                <div className={classes.wrapperButtonSearch}>
                    <ButtonSearch/>
                </div>
            </div>
        </div>
    );
};

export default FilterProject;