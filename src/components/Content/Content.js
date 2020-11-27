import React from 'react';
import List from './List/List';

import style from './Content.module.css';
import MemberInfo from './MemberInfo/MemberInfo';

const Content = (props) => {
    return (
        <>
            <div className={style.contentWrapper}>
            <List/>
            <MemberInfo/>
            </div>
        </>
    )
};

export default Content;