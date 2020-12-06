import React from 'react';
import FormBirthdayDate from './FormBirthdayDate/FormBirthdayDate';
import FormBirthday from './FormBirthdayDate/FormBirthdayDate';
import FormHome from './FormHome/FormHome';
import FormName from './FormName/FormName';
import FormWorkDate from './FormWorkDate/FormWorkDate';

import style from './MemberFormLeft.module.css';


const MemberFormLeft = (props) => {


    return (
        <div className={style.wrapper}>

            <FormName dispatch={props.dispatch} addMember={props.addMember} />
            <FormBirthdayDate />
            <FormHome />
            <FormWorkDate />



        </div>
    )
};

export default MemberFormLeft;