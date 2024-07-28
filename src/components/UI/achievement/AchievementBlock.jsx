import React from 'react';
import classes from './AchievementBlock.module.css';
import '../../../styles/Body/rate.css'

const AchievementBlock = (props) => {
    return (
        <div className={classes.container} key={props.id}>
            <div className={classes.wrapperTextYear}>
                <h1 className={classes.textYear}>{props.year}</h1>
            </div>
            <div className={classes.containerAch}>
                {props.achievements.map((achievement, index) => (
                    <a href={achievement['link']} target="_blank" key={index}>
                        <span className={classes.spanAch}>
                            <div className={achievement['rate']}>
                                <h3>
                                    • (Ранг: {achievement.rate}) {achievement.type}: "
                                    {achievement.course}", {achievement.company}
                                </h3>
                            </div>
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default AchievementBlock;