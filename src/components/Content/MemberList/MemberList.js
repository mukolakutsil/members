import React from 'react';
import Info from './Info/Info';
import List from './List/List';


import style from './MemberList.module.css';

const MemberList = (props) => {
    return (
        <>
            <div className={style.wrapper}>
            <List members={props.state.members}/>
            <Info memberInfo={props.state.memberInfo}/>
            </div>
        </>
    )
};

export default MemberList;