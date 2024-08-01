import React from 'react';
import classes from '../../styles/Body/CatalogProject.module.css'
import ProjectContainer from "../UI/project_container/ProjectContainer";

const CatalogProject = () => {

    //  TODO: Добавить модель для проектов
    const dataProject = [
        {
            id: 0,
            title: 'vC.ID',
            desc: 'vC.ID - Сервис авторизации для всех продуктов vChern. Достаточно один раз зарегистрироваться и можешь входить под одним аккаунтом везде 🤩',
            create_project: '9 июля 2024',
            stack: ['FastAPI', 'Nginx', 'Docker', 'PostgreSQL'],
            status: 'active',
            view: 100000000,
            link_logo: 'https://i.pinimg.com/564x/90/fc/67/90fc67d4e3b2e3bddd52aacd780b88b0.jpg',
            rate: 9.4,
        },
        {
            id: 1,
            title: 'vC.Main',
            desc: 'vC.Main - Личный сайт Чернышева Владислава, где можно узнать всю контактную информацию и попробовать готовые продукты 🎮',
            create_project: '1 сентября 2024',
            stack: ['React', 'Node.js', 'Express', 'Nginx', 'Docker', 'PostgreSQL'],
            status: 'in develop',
            view: 1,
            link_logo: 'https://i.pinimg.com/564x/b6/06/dd/b606dd4de4c2a9c44b6ffc8bf075af41.jpg',
            rate: 8,
        },
        {
            id: 2,
            title: 'vC.ID',
            desc: 'vC.ID - Сервис авторизации для всех продуктов vChern. Достаточно один раз зарегистрироваться и можешь входить под одним аккаунтом везде 🤩',
            create_project: '9 июля 2024',
            stack: ['FastAPI', 'Nginx', 'Docker', 'PostgreSQL'],
            status: 'active',
            view: 1024,
            link_logo: 'https://i.pinimg.com/564x/c4/2f/83/c42f8350a2dbeae1e11447bbbe79e0b1.jpg',
            rate: 1,
        },
    ]

    return (
        <div className={classes.container}>
            <div className={classes.wrapperTitleBlock}>
                <h1 className={classes.TitleBlock}>Каталог проектов</h1>
            </div>
            <div className={classes.wrapperContainer}>
                <div className={classes.containerProject}>
                    {dataProject.map((project, index) => (
                        <ProjectContainer project={project} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatalogProject;