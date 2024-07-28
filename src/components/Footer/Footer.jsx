import React from 'react';
import logo from '../../images/vChernLogo.png';
import classes from '../../styles/Footer/Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={classes.wrapper}>
                <div className={classes.logo}>
                    <img src={logo} width={"50px"} height={"50px"} alt=""/>
                    <p className={classes.arr}>
                        © All rights reserved
                    </p>
                </div>
                <div className={classes.wrapperStiker}>
                    <p className={classes.stiker}>📝</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;