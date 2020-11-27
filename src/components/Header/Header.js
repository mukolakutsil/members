import React from 'react';

import style from './Header.module.css';


const Header = (props) => {
    return (
        <header>
            <ul className={style.ul}>
                <li className={style.li}>Список</li>
                <li  className={style.li}>Додати</li>
            </ul>
        </header>
    )
};

export default Header;
