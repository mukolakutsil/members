import React from 'react';


import style from './MemberDetails.module.css';

const MemberDetails = (props) => {
    return (
        <>
            <div className={style.wrapper}>
            <p>ПІБ</p>
            <p>Куціль Микола Ігорович</p>
            <p>Дата народження</p>
            <p>22.12.2000</p>
            <p>Місце проживання</p>
            <p>с. Підріччя</p>
            <p>Дата працевлаштування</p>
            <p>12.05.2019</p>
            </div>
        </>
    )
};

export default MemberDetails;