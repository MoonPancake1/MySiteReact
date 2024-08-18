import React from 'react';
import classes from './AchievementBlock.module.css';
import '../../../styles/Body/Main/rate.css';

const AchievementBlock = (props) => {

    function openLink(link) {
        console.log(`${link} open!`)
        window.open(link, '_blank');
    }

    return (
        <div className={classes.container} key={props.id}>
            <div className={classes.wrapperTextYear}>
                <h1 className={classes.textYear}>{props.year}</h1>
            </div>
            <div className={classes.containerAch}>
                {props.achievements.map((achievement, index) => (
                    <button key={index} className={classes.btnAch}
                            onClick={openLink.bind(null, achievement['link'])}>
                        <span className={classes.spanAch}>
                            <div className={achievement['rate']}>
                                <h3 className={classes.textAch}>
                                    • (Ранг: {achievement.rate}) {achievement.type}: "
                                    {achievement.course}", {achievement.company}
                                </h3>
                            </div>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AchievementBlock;