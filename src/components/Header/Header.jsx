import React from 'react';
import UserTools from "../user_ui/UserTools";
import LoginBtn from "../UI/auth_btn/LoginBtn";
import classes from '../../styles/Header/Header.module.css';
import logo from '../../images/vChernLogo.png';


const Header = (props) => {
    return (
        <header>
            <div className={classes.wrapper}>
                <div className={classes.logo}>
                    <img src={logo} width={"50px"} height={"50px"} alt=""/>
                </div>
                <div className={classes.titleHeader}>
                    <h1 className={classes.mainText}>{props.title}</h1>
                </div>
                <div className={classes.auth}>
                    {props.login
                        ? <UserTools/>
                        : <LoginBtn/>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;