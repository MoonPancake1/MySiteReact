import React from 'react';
import classes from './ContactLink.module.css';

// Icons
import github from '../../../images/contactIcon/GitHub.png';
import tg from '../../../images/contactIcon/Telegram.png';
import vk from '../../../images/contactIcon/VK.png';
import email from '../../../images/contactIcon/Email.png';

const ContactLink = (props) => {

    let icon = '';
    let link = ``;

    if (props.tag === 'GitHub'){
        icon = github;
        link = `https://${props.link}`;
    } else if (props.tag === 'Telegram'){
        icon = tg;
        link = `https://${props.link}`;
    } else if (props.tag === 'VK'){
        icon = vk;
        link = `https://${props.link}`;
    } else if (props.tag === 'Email'){
        icon = email;
        link = 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvrcNLknZFFfgNWsxRdrGhpZJmMSqPlsHLjZhwPWLTMPBXHXnvNDrpkxklwBdzGSvCNWqV';
    }

    return (
        <a href={link} target="_blank" className={classes.contactLink} rel="noreferrer">
            <div className={classes.container}>
                <img src={icon} alt="" className={classes.iconLink}/>
                <h2>{props.link}</h2>
            </div>
        </a>
    );
};

export default ContactLink;