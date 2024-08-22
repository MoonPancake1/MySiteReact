import React from 'react';
import { ReactComponent as IconClose } from "./IconClose.svg";
import classes from "./Modal.module.css"

const Modal = ({isOpen, onClose, ...props}) => {
    return (
        <>
            {isOpen && (
                <div className={classes.container}>
                    <div className={classes.wrapper}>
                        <div className={classes.modalContent}>
                            <button className={classes.modalCloseBtn}
                                    onClick={() => onClose()}>
                                <IconClose/>
                            </button>
                            <h1 className={classes.title}>
                                {props.title}
                            </h1>
                            <p className={classes.msg}>
                                {props.msg}
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default Modal;