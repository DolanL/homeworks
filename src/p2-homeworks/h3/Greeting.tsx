import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void; // need to fix any
    addUser: () => void; // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? s.error : s.someClass// need to fix with (?:)

    return (
        <div>
            <SuperInputText value={name} onChange={setNameCallback} onKeyDown={onEnter} className={inputClass}/>
            <SuperButton onClick={addUser} disabled={!name}>add</SuperButton>
            <span>{totalUsers}</span>
            <div className={s.error__text}>{error}</div>
        </div>
    )
}

export default Greeting
