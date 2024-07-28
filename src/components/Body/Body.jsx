import React from 'react';
import classes from "../../styles/Body/Body.module.css";
import AboutMe from "./AboutMe";
import CaruselBlock from "./CaruselBlock";
import FilterProject from "./FilterProject";
import CatalogProject from "./CatalogProject";

const Body = (props) => {

    function changeTitle(title) {
        props.changeTitle(title);
    }

    return (
        <div className={classes.container}>
            <div className={classes.aboutMe}>
                <AboutMe/>
            </div>
            <div className={classes.carusel}>
                <CaruselBlock/>
            </div>
            <div className={classes.filter}>
                <FilterProject/>
            </div>
            <div className={classes.catalogProject}>
                <CatalogProject/>
            </div>
        </div>
    );
};

export default Body;