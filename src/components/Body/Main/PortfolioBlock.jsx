import React, {useEffect, useState} from 'react';
import classes from '../../../styles/Body/Main/PorfolioBlock.module.css'
import AchievementBlock from "../../UI/achievement/AchievementBlock";
import {useFetching} from "../../hooks/useFetching";
import AchievementsService from "../../../Api/AchievementsService";
import Loader from "../../UI/loader/Loader";


const PortfolioBlock = () => {

    const [achievements, setAchievements] = useState([]);
    const [fetchAchievements, isLoading, achievementError] = useFetching(
        async () => {
            const achievements = await AchievementsService.getAchievements();
            setAchievements(achievements);
        }
    )

    useEffect(() => {
        // eslint-disable-next-line
        fetchAchievements();
        // eslint-disable-next-line
    }, []);

    // A (Распространённое)
    // C (Обычное)
    // S (Необычное)
    // R (Редкое)
    // RR (Очень редкое)
    // RRR (Легендарное)

    function parseAchievements(achievements) {

        const achBlocks = [];

        const filteredAchievements = {}
        
        for (const i in achievements){
            const year = achievements[i].year.split('-')[0];
            
            if (filteredAchievements[year]){
                filteredAchievements[year].push(achievements[i])
            } else {
                filteredAchievements[year] = []
                filteredAchievements[year].push(achievements[i])
            }
        }

        for (let i in filteredAchievements) {
            achBlocks.push(<AchievementBlock key={i} year={i} achievements={filteredAchievements[i]} />);
        }

        return achBlocks.reverse();
    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapperTextMain}>
                <h1 className={classes.textMain}>Портфолио</h1>
            </div>
            <div className={classes.wrapperPortfolio}>
                {achievementError &&
                    <div className={classes.wrapperError}>
                        <h1>Произошла ошибка!</h1>
                    </div>
                }
                {isLoading === true
                    ?   <div className={classes.wrapperLoader}>
                            <Loader />
                        </div>
                    :   <div>
                            {parseAchievements(achievements).map((achievementBlock) => (
                                achievementBlock
                            ))}
                        </div>
                }
            </div>
        </div>
    );
};

export default PortfolioBlock;