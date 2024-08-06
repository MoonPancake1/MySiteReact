import React, {useState} from 'react';
import classes from "../../styles/Body/Body.module.css";
import AboutMe from "./AboutMe";
import CaruselBlock from "./CaruselBlock";
import FilterProject from "./FilterProject";
import CatalogProject from "./CatalogProject";
import PortfolioBlock from "./PortfolioBlock";
import ContactBlock from "./ContactBlock";

const Body = (props) => {

    const [user, setUser] = useState('');

    function changeTitle(title) {
        props.changeTitle(title);
    }

    function getTokensUser() {
        try {
            props.getTokens('refa', '123');
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
            <p>{user.nickname}</p>
            <button onClick={getTokensUser}>
                get tokens
            </button>
            <button onClick={getDataUser}>
                get user info
            </button>
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