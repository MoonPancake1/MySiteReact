import React from 'react';
import classes from '../../styles/Body/PorfolioBlock.module.css'
import AchievementBlock from "../UI/achievement/AchievementBlock";

const PortfolioBlock = () => {

    // A (Распространённое)
    // C (Обычное)
    // S (Необычное)
    // R (Редкое)
    // RR (Очень редкое)
    // RRR (Легендарное)
    const achievements =
        {
            2024: [
                {
                    id: 1,
                    course: 'Тренировки по алгоритмам 5.0',
                    type: 'Сертификат о прохождении курса',
                    company: 'Yandex',
                    link: 'https://id.vchern.me/docs',
                    rate: 'S',
                    year: '2024'
                }
            ],
            2023: [
                {
                    id: 2,
                    course: 'Python Pro',
                    type: 'Сертификат о прохождении курса',
                    company: 'Uchi Doma',
                    link: 'https://id.vchern.me/docs',
                    rate: 'R',
                    year: '2023'
                },
                {
                    id: 3,
                    course: 'Введение в программирование на языке \n' +
                        'Python',
                    type: 'Сертификат о прохождении курса',
                    company: 'Сириус.Курсы',
                    link: 'https://id.vchern.me/docs',
                    rate: 'C',
                    year: '2023'
                },
                {
                    id: 4,
                    course: 'Введение в программирование (С++)',
                    type: 'Сертификат о прохождении курса',
                    company: 'Yandex',
                    link: 'https://id.vchern.me/docs',
                    rate: 'S',
                    year: '2023'
                }
            ]
        }

    function parseAchievements(achievements) {

        const achBlocks = [];

        for (let i in achievements) {
            achBlocks.push(<AchievementBlock key={i} year={i} achievements={achievements[i]} />);
        }

        return achBlocks.reverse();
    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapperTextMain}>
                <h1 className={classes.textMain}>Портфолио</h1>
                <h1 className={classes.stikerMain}>🏆</h1>
            </div>
            <div className={classes.wrapperPortfolio}>
                {parseAchievements(achievements).map((achievement) => (
                    achievement
                ))}
            </div>
            <div className={classes.wrapperStikerPlane}>
                <h1 className={classes.stikerPlane}>🧑🏻‍🎓</h1>
            </div>
        </div>
    );
};

export default PortfolioBlock;