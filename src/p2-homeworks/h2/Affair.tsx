import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
            <SuperButton onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
