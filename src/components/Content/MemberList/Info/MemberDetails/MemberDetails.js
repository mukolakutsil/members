import React from 'react';


import style from './MemberDetails.module.css';

const MemberDetails = (props) => {
    return (
        <>
            <div className={style.wrapper}>
            <p>ПІБ</p>
            <p>{props.memberInfo[0].name}</p>
            <p>Дата народження</p>
            <p>{props.memberInfo[0].birthdayDate}</p>
            <p>Місце проживання</p>
            <p>{props.memberInfo[0].home}</p>
            <p>Дата працевлаштування</p>
            <p>{props.memberInfo[0].workDate}</p>
            </div>
        </>
    )
};

export default MemberDetails;