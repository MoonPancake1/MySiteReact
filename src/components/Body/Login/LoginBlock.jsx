import React, {useState} from 'react';
import classes from '../../../styles/Body/Login/LoginBlock.module.css';
import AuthBtn from "./authBtn/AuthBtn";
import Modal from "../../UI/modal_error/Modal";

const LoginBlock = () => {

    const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);

    function redirectToAuth() {
        setModalInfoIsOpen(true)
    }

    return (
        <div className={classes.container}>
            <Modal isOpen={modalInfoIsOpen} onClose={()=> setModalInfoIsOpen(false)}
            title={"Упс..."} msg={"Данная возможность будет доступна только с 1 сентября 🥳"}/>
            <div className={classes.containerAuthBtn}>
                <AuthBtn onClick={redirectToAuth}/>
            </div>
            <div className={classes.wrapperInfoTable}>
                <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f425.png" alt=""
                     className={classes.babyChiken}/>
                <div className={classes.containerInfoTable}>
                    <p className={classes.infoTable}>
                        vC.ID – единая система авторизации для всех сервисов vChern 🎩
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginBlock;