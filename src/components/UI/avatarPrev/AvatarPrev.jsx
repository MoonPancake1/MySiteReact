import React, {useEffect, useState} from 'react';
import classes from "./AvatarPrev.module.css";
import utils from "../../../utils/utils";

const AvatarPrev = (props) => {

    const [colorBorder, setColorBorder] = useState([0, 0, 0]);
    const [colorBackground, setColorBackground] = useState([0, 0, 0, 10]);

    const img = new Image( 175, 175);
    img.src = props.imgLink

    useEffect(() => {
        const rgbObj = props.colorThief.getColor(img)
        let colorBorder = utils.rgbToHex(rgbObj[0], rgbObj[1], rgbObj[2]);
        colorBorder = `${props.borderSize} solid ${colorBorder}`
        const colorBackground = `rgba(${rgbObj[0]}, ${rgbObj[1]}, ${rgbObj[2]}, 0.1)`;
        setColorBorder(colorBorder)
        setColorBackground(colorBackground);
    }, []);

    return (
        <div className={classes.container} style={{
            border: colorBorder,
            borderRadius: props.borderRadius,
            backgroundColor: colorBackground,
        }}>
            <img src={props.imgLink} alt="" className={classes.imgAvatar}/>
        </div>
    );
};

export default AvatarPrev;