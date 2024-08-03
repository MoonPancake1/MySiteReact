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
                        <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f393.png" alt=""
                             className={classes.subLiStiker}/>
                    </span>
                        <span className={classes.spanP}>
                        <p className={classes.textSubLi}>• FullStack-разработчик</p>
                        <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f468-200d-1f4bb.png" alt=""
                             className={classes.subLiStiker}/>
                    </span>
                        <span className={classes.spanP}>
                        <p className={classes.textSubLi}>• DevOps-инженер</p>
                        <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f517.png" alt=""
                            className={classes.subLiStiker}/>
                    </span>
                        <span className={classes.spanP}>
                        <p className={classes.textSubLi}>• Product-менеджер</p>
                        <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f4bc.png" alt=""
                             className={classes.subLiStiker}/>
                    </span>
                    </div>
                </div>
                <div className={classes.wrapperMe}>
                    <img src={me} alt="Прекрасный я" className={classes.me}/>
                </div>
            </div>
            <div className={classes.stikers}>
                <div style={{gridColumn: "1/9"}}>
                    <div className={classes.stiker1}>
                        <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f3c6.png" alt=""/>
                    </div>
                </div>
                <div style={{gridColumn: "9/10"}}>
                    <div className={classes.stiker2}>
                        <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f3af.png" alt=""
                        className={classes.stiker2Img}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AboutMe;