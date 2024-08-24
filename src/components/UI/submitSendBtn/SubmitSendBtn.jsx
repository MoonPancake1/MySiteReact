import React, {useEffect, useState} from 'react';
import classes from "./SubmitSendBtn.module.css";
import UI_Send from "./UI_Send.png";
import popover from "bootstrap/js/src/popover";

const SubmitSendBtn = (props) => {

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (props.check.length > 0){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [props.check])


    return (
        <div className={classes.container}>
            <button className={classes.btnSend} style={{
                borderWidth: props.borderSize,
                borderRadius: props.borderRadius,
            }} disabled={disabled} onClick={props.onClick}>
                <img src={UI_Send} alt="" className={classes.imgUISend}/>
            </button>
        </div>
    );
};

export default SubmitSendBtn;