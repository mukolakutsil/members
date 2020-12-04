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

            <FormName updateNewMemberName={props.updateNewMemberName} addMember={props.addMember} addNewMemberName={props.addNewMemberName} />
            <FormBirthdayDate />
            <FormHome />
            <FormWorkDate />



        </div>
    )
};

export default MemberFormLeft;