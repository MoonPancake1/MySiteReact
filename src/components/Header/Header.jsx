import React from 'react';
import LoginBtn from "../UI/auth_btn/LoginBtn";
import classes from '../../styles/Header/Header.module.css';
import logo from '../../images/logo256x256.png';
import {Link} from "react-router-dom";


const Header = (props) => {
    return (
        <header>
            <div className={classes.wrapper}>
                <div className={classes.wrapperLogo}>
                    <Link to={"/"} aria-label={"Главная страница"} role={"button"}>
                        <img src={logo} className={classes.logo} alt=""/>
                    </Link>
                </div>
                <div className={classes.titleHeader}>
                    <h1 className={classes.mainText}>{props.title}</h1>
                </div>
                <div className={classes.auth}>
                    <LoginBtn/>
                </div>
            </div>
        </header>
    );
};

export default Header;