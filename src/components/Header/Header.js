import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';


const Header = (props) => {
    return (
        <header>
            <ul className={style.ul}>
                <li className={style.li}>
                    <NavLink className={style.a} activeClassName={style.active} to='/memberlist'>Список</NavLink>
                </li>
                <li className={style.li}>
                    <NavLink className={style.a} activeClassName={style.active} to='/addmember'>Додати</NavLink>
                </li>
            </ul>
        </header>
    )
};

export default Header;
