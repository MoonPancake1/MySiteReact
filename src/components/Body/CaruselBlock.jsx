import React from 'react';
import classes from "../../styles/Body/CaruselBlock.module.css";
import Carusel from '../UI/carusel/Carusel'


const CaruselBlock = () => {

    const imagesData = [
        {
            'title': 'vC.ID',
            'description': 'vC.ID – система авторизации',
            'image': 'https://i.pinimg.com/564x/2b/c7/77/2bc7771c0457d542cea5a7574e75c395.jpg',
        },
        {
            'title': 'vC.ID',
            'description': 'vC.ID – система авторизации',
            'image': 'https://i.pinimg.com/564x/07/21/1b/07211b078ab5e9f537a3daeccef72279.jpg',
        },
        {
            'title': 'vC.ID',
            'description': 'vC.ID – система авторизации',
            'image': 'https://i.pinimg.com/564x/d4/42/9e/d4429e833937f4733fa37d8e86b3675f.jpg',
        }
    ]

    // const images = require.context('../../images/projectImages', true);
    // const imageList = images.keys().map((image) => images(image));
    //
    // for (let i = 0; i < imagesData.length; i++){
    //     imagesData[i].image = imageList[i]
    // }

    return (
        <div className={classes.container}>
            <div className={classes.wrapperTextMain}>
                <h1 className={classes.textMain}>Каруселька</h1>
            </div>
            <div className={classes.wrapperImagesCarusel}>
                <Carusel images={imagesData} />
            </div>
            <div className={classes.wrapperStiker}>
                <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f3a0.png" alt=""
                className={classes.stiker}/>
            </div>
        </div>
    );
};

export default CaruselBlock;