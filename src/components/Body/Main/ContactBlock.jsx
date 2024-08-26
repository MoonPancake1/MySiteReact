import React from 'react';
import classes from '../../../styles/Body/Main/ContactBlock.module.css';
import meContact from '../../../images/meContact.webp';
import ContactLink from "../../UI/contact_link/ContactLink";

const ContactBlock = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapperTextMain}>
                <h1 className={classes.textMain}>Связь со мной</h1>
                <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f54a-fe0f.png" alt=""
                    className={classes.stikerMain}/>
            </div>
            <div className={classes.wrapperContactInfo}>
                <div className={classes.wrapperMeContact}>
                    <img src={meContact} className={classes.meContact} alt=""/>
                    <div className={classes.containerLinks}>
                        <ContactLink tag={"GitHub"} link={"github.com/MoonPancake1"}/>
                        <ContactLink tag={"Telegram"} link={"t.me/p1n0k10"}/>
                        <ContactLink tag={"VK"} link={"vk.com/vr1_r1"}/>
                        <ContactLink tag={"Email"} link={"tchernyshev.vladik@yandex.ru"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBlock;