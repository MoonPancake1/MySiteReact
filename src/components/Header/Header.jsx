import React, {useContext} from 'react';
import LoginBtn from "../UI/auth_btn/LoginBtn";
import classes from '../../styles/Header/Header.module.css';
import logo from '../../images/logo256x256.png';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";
import AvatarPrev from "../UI/avatarPrev/AvatarPrev";


const Header = (props) => {

    const auth = useContext(AuthContext);

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
                    {auth.isAuthenticated
                        ?   <div className={classes.containerAvatar}>
                                <AvatarPrev imgLink={auth.user.avatar}/>
                            </div>
                        : <LoginBtn/>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;