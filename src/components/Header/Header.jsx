import React from 'react';
import LoginBtn from "../UI/auth_btn/LoginBtn";
import classes from '../../styles/Header/Header.module.css';
import logo from '../../images/vChernLogo.png';
import {Link} from "react-router-dom";


const Header = (props) => {
    return (
        <header>
            <div className={classes.wrapper}>
                <div className={classes.logo}>
                    <Link to={"/"}>
                        <img src={logo} width={"50px"} height={"50px"} alt=""/>
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