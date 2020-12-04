import React from 'react';

import style from './AddMember.module.css';
import MemberFormLeft from './MemberFormLeft/MemberFormLeft';
import MemberFormRight from './MemberFormRight/MemberFormRight';


const AddMember = (props) => {

    // let memberName = React.createRef();


    // let addNewMember = () => {
    //     props.addNewMemberName()
    // }

    // let onNameChange = () => {
    //     let newMemberName = memberName.current.value;
    //     props.updateNewMemberName(newMemberName)
    // }
    return (
        <>
            <div className={style.wrapper}>
               <MemberFormLeft updateNewMemberName={props.updateNewMemberName}  addMember={props.addMember} addNewMemberName={props.addNewMemberName}/>
             <MemberFormRight/>
            </div>
        </>
    )
};

export default AddMember;