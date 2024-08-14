import React, {useEffect, useState} from 'react';
import classes from "../../styles/Body/Body.module.css";
import AboutMe from "./AboutMe";
import CaruselBlock from "./CaruselBlock";
import FilterProject from "./FilterProject";
import CatalogProject from "./CatalogProject";
import PortfolioBlock from "./PortfolioBlock";
import ContactBlock from "./ContactBlock";
import axios from "axios";

const Body = (props) => {

    const [user, setUser] = useState('');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects(0, 6);
    }, []);

    async function fetchProjects(skip = 0, limit = 6){
        const resp = await axios.get(`https://id.vchern.me/main/projects/?skip=${skip}&limit=${limit}`);
        setProjects(resp.data)
    }


    function changeTitle(title) {
        props.changeTitle(title);
    }

    function getTokensUser() {
        try {
            props.getTokens('refa', 'c990d306-82e3-448a-b2f2-9a88a35f0a46');
        } catch (err) {
            console.log(err);
        }
    }

    function getDataUser() {
        try {
            const tmp = props.authUser(props.cookies.access_token);
            tmp.then(userData => {
                setUser(userData);
            })
        } catch (e) {
            console.log(e);
        }
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
                <CatalogProject projects={projects} />
            </div>
            <div className={classes.portfolioBlock}>
                <PortfolioBlock/>
            </div>
            <div className={classes.contactBlock}>
                <ContactBlock/>
            </div>
        </div>
    );
};

export default Body;