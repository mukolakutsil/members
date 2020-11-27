import React from 'react';

import style from './MemberInfo.module.css';


const MemberInfo = (props) => {
    return (
        <div className={style.wrapper}>
            <ul className={style.ul}>
                <li className={style.li}>Список</li>
                <li  className={style.li}>Додати</li>
            </ul>
        </div>
    )
};

export default MemberInfo;
