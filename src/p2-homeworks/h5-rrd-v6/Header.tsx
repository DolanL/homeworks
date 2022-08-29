import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"


function Header() {

    const [addClass, setAddClass] = useState(false);


    const onHoverHandler = () => {
        setAddClass(!addClass);
    }

    const onMouseLeaveHandler = () => {
        setAddClass(false)
    }

    return (
        <div className={s.section}>
            <div className={s.menu__block} onMouseLeave={onMouseLeaveHandler}>
                <a className={s.menu__btn} onMouseEnter={onHoverHandler}>
                    <span className={addClass ? `${s.menu__span} ${s.menu__span__active}` : `${s.menu__span}`}></span>
                </a>
                <nav className={addClass ? `${s.menu__nav} ${s.menu__nav__active}` : `${s.menu__nav}`}>
                    <NavLink className={s.menu__block_Navlink} to={'/pre-junior'}>pre-junior</NavLink>
                    <NavLink className={s.menu__block_Navlink} to={'/junior'}>junior</NavLink>
                    <NavLink className={s.menu__block_Navlink} to={'/junior+'}>junior + </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header
