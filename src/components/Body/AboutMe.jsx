import React from 'react';
import classes from "../../styles/Body/AboutMe.module.css";
import me from "../../images/me.jpg";

const AboutMe = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.mainPart}>
                <div className={classes.textAbout}>
                    <h1 className={classes.textMain}>Это возможно!</h1>
                    <h2 className={classes.textSubMain}>Чернышев Владислав:</h2>
                    <div>
                    <span className={classes.spanP}>
                        <p className={classes.textSubLi}>• Студент СПбПУ</p>
                        <p className={classes.subLiStiker}>🎓</p>
                    </span>
                        <span className={classes.spanP}>
                        <p className={classes.textSubLi}>• FullStack-разработчик</p>
                        <p className={classes.subLiStiker}>🧑‍💻</p>
                    </span>
                        <span className={classes.spanP}>
                        <p className={classes.textSubLi}>• Смотрю аниме</p>
                        <p className={classes.subLiStiker}>🇯🇵</p>
                    </span>
                        <span className={classes.spanP}>
                        <p className={classes.textSubLi}>• Готов к авантюрам</p>
                        <p className={classes.subLiStiker}>🤪</p>
                    </span>
                    </div>
                </div>
                <div className={classes.wrapperMe}>
                    <img src={me} alt="Прекрасный я" className={classes.me}/>
                </div>
            </div>
            <div className={classes.stikers}>
                <div style={{gridColumn: "1/9"}}>
                    <div className={classes.stiker1}>🏆</div>
                </div>
                <div style={{gridColumn: "9/10"}}>
                    <div className={classes.stiker2}>🎯</div>
                </div>
            </div>
        </div>
    );
};


export default AboutMe;