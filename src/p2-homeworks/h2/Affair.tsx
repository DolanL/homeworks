import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: () => void;
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback();
    }

    return (
        <div className={s.wrapper}>
            <div>{props.affair.name}</div>
            <div>{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
