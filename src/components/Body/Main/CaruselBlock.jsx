import React from 'react';
import classes from "../../../styles/Body/Main/CaruselBlock.module.css";
import Carusel from '../../UI/carusel/Carusel'
import imgSPbPU from '../../../images/projectImages/spbpu_1.webp'
import imgFullStack from '../../../images/projectImages/fullStack_1.webp'
import imgPolyglot from '../../../images/projectImages/polyglot_1.webp'


const CaruselBlock = () => {

    const imagesData = [
        {
            'title': 'Студент СПбПУ',
            'description': 'Обучаюсь на специальности "Инноватика" с 2023 по 2027',
            'image': imgSPbPU,
        },
        {
            'title': 'FullStack-разработчик',
            'description': 'Занимаюсь разработкой веб-приложений с 2022 года',
            'image': imgFullStack,
        },
        {
            'title': 'Полиглот',
            'description': 'Знаком с 5 языками программирования',
            'image': imgPolyglot,
        }
    ]

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