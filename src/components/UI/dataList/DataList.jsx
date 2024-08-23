import React from 'react';
import classes from './DataList.module.css';

const DataList = (props) => {
    return (
        <datalist className={classes.dataList} id={props.id}>
            {props.data.map((item) => (
                <option value={item} key={item}/>
            ))}
        </datalist>
);
};

export default DataList;