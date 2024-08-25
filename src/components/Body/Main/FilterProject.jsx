import React from 'react';
import classes from "../../../styles/Body/Main/FilterProject.module.css";
import InputBox from "../../UI/input_box/InputBox";
import DataList from "../../UI/dataList/DataList";


const FilterProject = (props) => {

    // TODO: переделать "Сортировку" с input на checkbox
    const sortList = ['Сначала новые',
    'Сначала старые', 'По названию', 'По просмотрам', 'По рейтингу',
    'Рабочие проекты', 'В разаработке', 'Не рабочие проекты'];

    return (
        <div className={classes.container}>
            <div className={classes.wrapperMainText}>
                <h1 className={classes.textMain}>Сортировка</h1>
            </div>
            <div className={classes.containerInput}>
                <div className={classes.wrapperInputBox1}>
                    <InputBox name={"Search"}
                              placeholder={"Поиск..."}
                              onChange={(e) => props.changeProjectName(e.target.value)}
                              img={"https://emoji.aranja.com/static/emoji-data/img-apple-160/1f575-fe0f-200d-2642-fe0f.png"}
                    />
                </div>
                <div className={classes.wrapperInputBox2}>
                    <InputBox name={"Stack"}
                              placeholder={"Стек"}
                              onChange={(e) => props.changeProjectStack(e.target.value)}
                              img={"https://emoji.aranja.com/static/emoji-data/img-apple-160/1f4da.png"}
                              list={"techList"}
                    />
                    {props.techIsLoading
                    ? <></>
                    : <DataList id={"techList"} data={props.techs}/>}
                </div>
                <div className={classes.wrapperInputBox3}>
                    <InputBox name={"Sorted"}
                              placeholder={"Сортировка"}
                              onChange={(e) => props.changeProjectSort(e.target.value)}
                              img={"https://emoji.aranja.com/static/emoji-data/img-apple-160/1f4c8.png"}
                              list={"sortList"}
                    />
                    <DataList id={"sortList"} data={sortList}/>
                </div>
            </div>
        </div>
    );
};

export default FilterProject;