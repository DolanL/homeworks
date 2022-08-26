import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}


function Message(props: MessagePropsType) {

    return (
        <div className={s.message__wrapper}>
            <img className={s.message__img} src={props.avatar} alt=""/>
            <div>
                <div className={s.message__item}>
                    <div className={s.message__name}>{props.name}</div>
                    <div className={s.message__message}>{props.message}</div>
                    <div className={s.message__time__wrapper}>
                        <span className={s.message__time}>{props.time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message
